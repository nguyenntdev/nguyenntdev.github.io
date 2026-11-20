import test from 'node:test';
import assert from 'node:assert/strict';
import { BLOG_POSTS, PROFILE, PROJECTS, PUBLICATIONS } from '../data/portfolioData';
import { detectInitialLanguage } from './i18n';
import {
  GLHS_SCENARIOS,
  calculateScrollProgress,
  countBlogPostWords,
  evaluateGlhsCommit,
  filterAndSortProjects,
  filterBlogPosts,
  filterPublications,
  findBlogPostBySlug,
  formatBibtexCitation,
  validateContactForm,
} from './portfolioLogic';

test('detectInitialLanguage defaults to Vietnamese while respecting localization and explicit preferences', () => {
  // Default fallback when no locale info is provided
  assert.equal(detectInitialLanguage({}), 'vi');

  // Non-English, non-Vietnamese browser defaults to Vietnamese
  assert.equal(detectInitialLanguage({ browserLanguages: ['ja-JP'], timeZone: 'Asia/Tokyo' }), 'vi');

  // Vietnamese locale always resolves to Vietnamese
  assert.equal(detectInitialLanguage({ browserLanguages: ['vi-VN'], timeZone: 'UTC' }), 'vi');

  // Vietnam timezone prefers Vietnamese even when browser UI is English
  assert.equal(
    detectInitialLanguage({ browserLanguages: ['en-US'], timeZone: 'Asia/Ho_Chi_Minh' }),
    'vi'
  );

  // English-localized browser outside Vietnam resolves to English
  assert.equal(
    detectInitialLanguage({ browserLanguages: ['en-US'], timeZone: 'America/New_York' }),
    'en'
  );

  // Saved user preference overrides browser localization
  assert.equal(
    detectInitialLanguage({
      savedLang: 'vi',
      browserLanguages: ['en-US'],
      timeZone: 'America/New_York',
    }),
    'vi'
  );

  // Explicit URL query overrides both saved preference and browser localization
  assert.equal(
    detectInitialLanguage({
      queryLang: 'en',
      savedLang: 'vi',
      browserLanguages: ['vi-VN'],
      timeZone: 'Asia/Ho_Chi_Minh',
    }),
    'en'
  );
});

test('filterAndSortProjects prioritizes hospitality work under hospitality lens', () => {
  const sorted = filterAndSortProjects(PROJECTS, 'hospitality', 'all');
  assert.equal(sorted.length, PROJECTS.length);
  assert.equal(sorted[0].id, 'thong-dong-quan');
  assert.equal(sorted[1].id, 'the-clara-sat');
});

test('filterAndSortProjects prioritizes research work under research lens', () => {
  const sorted = filterAndSortProjects(PROJECTS, 'research', 'all');
  assert.equal(sorted.length, PROJECTS.length);
  assert.equal(sorted[0].id, 'project-clara');
  assert.equal(sorted[1].id, 'luu-nien');
});

test('filterAndSortProjects filters accurately by category', () => {
  const edtech = filterAndSortProjects(PROJECTS, 'all', 'edtech-heritage');
  assert.equal(edtech.length, 2);
  assert.deepEqual(
    edtech.map((p) => p.id),
    ['luu-nien', 'the-clara-sat']
  );
});

test('SQRTOJ statistics reflect 4,167 users and 93,447 submissions across hero and project data', () => {
  const ojMetric = PROFILE.proofMetrics.find((m) => m.value.en === '93,447');
  assert.ok(ojMetric);
  assert.match(ojMetric.detail.en, /4,167/);
  assert.match(ojMetric.detail.vi, /4\.167/);

  const sqrtoj = PROJECTS.find((p) => p.id === 'sqrt-oj')!;
  assert.equal(sqrtoj.period.vi, '2023–Hiện tại');
  assert.equal(sqrtoj.period.en, '2023–Present');
  assert.equal(sqrtoj.metrics[0].value.en, '4,167');
  assert.equal(sqrtoj.metrics[2].value.en, '93,447');

  const clara = PROJECTS.find((p) => p.id === 'project-clara')!;
  assert.equal(clara.metrics[1].label.vi, 'Tranh chấp ghi PostgreSQL');
});

test('filterPublications filters health-ai and digital-heritage tracks', () => {
  const health = filterPublications(PUBLICATIONS, 'health-ai');
  const heritage = filterPublications(PUBLICATIONS, 'digital-heritage');
  assert.equal(health.length, 2);
  assert.equal(heritage.length, 3);
  assert.equal(filterPublications(PUBLICATIONS, 'all').length, 5);
});

test('filterBlogPosts and findBlogPostBySlug resolve all 7 bilingual articles accurately', () => {
  assert.equal(filterBlogPosts(BLOG_POSTS, 'all').length, 7);
  assert.equal(filterBlogPosts(BLOG_POSTS, 'reflection').length, 3);
  const found = findBlogPostBySlug(BLOG_POSTS, 'uoc-mo-tro-thanh-mot-nguoi-binh-thuong');
  assert.ok(found);
  assert.equal(found.content.vi.title, 'Ước mơ trở thành một người bình thường');
  assert.equal(findBlogPostBySlug(BLOG_POSTS, 'non-existent-slug'), null);
});

test('all 7 blog posts contain complete bilingual prose with sentence-case titles', () => {
  for (const post of BLOG_POSTS) {
    for (const lang of ['vi', 'en'] as const) {
      const words = countBlogPostWords(post, lang);
      assert.ok(
        words >= 450,
        `Expected substantive essay (>= 450 words) for ${post.slug} (${lang}), got ${words}`
      );
      // Verify no stray broken markdown image placeholders
      const allText = post.content[lang].sections
        .flatMap((s) => [...s.paragraphs, ...(s.afterListParagraphs ?? [])])
        .join('\n');
      assert.equal(allText.includes('!image.png'), false, `Found raw !image.png in ${post.slug}`);
    }
    // Verify sentence-case titles (no Title Case on common lowercase words)
    assert.equal(
      post.content.en.title.includes(' Not '),
      false,
      `Expected sentence-case EN title for ${post.slug}`
    );
    assert.equal(
      post.content.vi.title.includes(' Không Phải '),
      false,
      `Expected sentence-case VI title for ${post.slug}`
    );
  }
});

test('formatBibtexCitation generates structured BibTeX for paper and poster entries', () => {
  const paper = PUBLICATIONS.find((p) => p.id === 'healthinf-2027')!;
  const poster = PUBLICATIONS.find((p) => p.id === 'fmc-2026')!;

  const paperBib = formatBibtexCitation(paper);
  assert.match(paperBib, /^@inproceedings\{nguyen2027snapshot,/);
  assert.match(paperBib, /HEALTHINF 2027/);

  const posterBib = formatBibtexCitation(poster);
  assert.match(posterBib, /^@misc\{nguyen2026glhs,/);
});

test('evaluateGlhsCommit enforces snapshot versions, conflict checks, and consent scopes in VI and EN', () => {
  const cleanEn = evaluateGlhsCommit(GLHS_SCENARIOS[0], 'en');
  assert.equal(cleanEn.decision, 'ADMITTED');
  assert.equal(cleanEn.commitAllowed, true);

  const lateVi = evaluateGlhsCommit(GLHS_SCENARIOS[1], 'vi');
  assert.equal(lateVi.decision, 'DEFERRED_RECONCILE');
  assert.equal(lateVi.commitAllowed, false);
  assert.match(lateVi.statusText, /Hoãn/);

  const conflict = evaluateGlhsCommit(GLHS_SCENARIOS[2], 'en');
  assert.equal(conflict.decision, 'DEFERRED_RECONCILE');
  assert.equal(conflict.commitAllowed, false);

  const disclosure = evaluateGlhsCommit(GLHS_SCENARIOS[3], 'vi');
  assert.equal(disclosure.decision, 'DISCLOSURE_WITHHELD');
  assert.equal(disclosure.disclosuresWithheld, 6);
  assert.equal(disclosure.commitAllowed, false);
});

test('validateContactForm validates in both Vietnamese and English', () => {
  const invalidVi = validateContactForm(
    {
      name: '',
      email: 'not-an-email',
      subject: '',
      message: 'Hi',
    },
    'vi'
  );
  assert.equal(invalidVi.isValid, false);
  assert.match(invalidVi.errors.name!, /Vui lòng/);
  assert.match(invalidVi.errors.email!, /email hợp lệ/);

  const validEn = validateContactForm(
    {
      name: 'Dr. Minh Tran',
      email: 'minh.tran@university.edu',
      subject: 'HEALTHINF 2027 Research Collaboration',
      message: 'Interested in discussing your HEALTHINF 2027 snapshot governance paper.',
    },
    'en'
  );
  assert.equal(validEn.isValid, true);
  assert.deepEqual(validEn.errors, {});
});

test('calculateScrollProgress computes clamped reading percentage across scroll bounds', () => {
  assert.equal(calculateScrollProgress(0, 2400, 900), 0);
  assert.equal(calculateScrollProgress(750, 2400, 900), 50);
  assert.equal(calculateScrollProgress(1500, 2400, 900), 100);
  assert.equal(calculateScrollProgress(-50, 2400, 900), 0);
  assert.equal(calculateScrollProgress(2000, 2400, 900), 100);
  assert.equal(calculateScrollProgress(0, 800, 900), 0);
  assert.equal(calculateScrollProgress(Number.NaN, 2400, 900), 0);
});
