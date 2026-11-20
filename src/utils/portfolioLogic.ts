import type {
  BlogCategory,
  BlogPost,
  PerspectiveLens,
  ProjectCategory,
  ProjectItem,
  PublicationItem,
  PublicationTrack,
} from '../data/portfolioData';
import type { Language, Localized } from './i18n';

export interface GlhsScenario {
  id: 'clean-commit' | 'late-evidence' | 'conflict-write' | 'unscoped-disclosure';
  label: Localized<string>;
  readSnapshotVersion: number;
  currentLedgerVersion: number;
  hasEvidenceConflict: boolean;
  requestedScope: 'care-continuity' | 'marketing-analytics';
  consentedScopes: string[];
  criticalFactCount: number;
  unnecessaryDisclosureCount: number;
  description: Localized<string>;
}

export interface GlhsEvaluationResult {
  decision: 'ADMITTED' | 'DEFERRED_RECONCILE' | 'DISCLOSURE_WITHHELD';
  statusText: string;
  reason: string;
  criticalFactsRetained: number;
  disclosuresWithheld: number;
  commitAllowed: boolean;
}

export const GLHS_SCENARIOS: GlhsScenario[] = [
  {
    id: 'clean-commit',
    label: {
      vi: 'Cập nhật khớp phiên bản',
      en: 'Version-Matched Care Update',
    },
    readSnapshotVersion: 14,
    currentLedgerVersion: 14,
    hasEvidenceConflict: false,
    requestedScope: 'care-continuity',
    consentedScopes: ['care-continuity', 'emergency-summary'],
    criticalFactCount: 4,
    unnecessaryDisclosureCount: 0,
    description: {
      vi: 'Snapshot đọc v14 khớp hoàn toàn với đầu sổ cái v14 cùng phạm vi đồng thuận hợp lệ.',
      en: 'Read snapshot v14 matches active longitudinal ledger v14 with verified consent scope.',
    },
  },
  {
    id: 'late-evidence',
    label: {
      vi: 'Kết quả xét nghiệm về muộn',
      en: 'Late-Arriving Lab Evidence',
    },
    readSnapshotVersion: 12,
    currentLedgerVersion: 14,
    hasEvidenceConflict: false,
    requestedScope: 'care-continuity',
    consentedScopes: ['care-continuity'],
    criticalFactCount: 3,
    unnecessaryDisclosureCount: 0,
    description: {
      vi: 'Agent AI tạo đề xuất từ snapshot cũ v12 trong khi kết quả xét nghiệm mới đã nâng sổ cái lên v14.',
      en: 'AI agent drafted an update from stale snapshot v12 while newer lab results already committed at v14.',
    },
  },
  {
    id: 'conflict-write',
    label: {
      vi: 'Ghi đè liều thuốc xung đột',
      en: 'Conflicting Medication Write',
    },
    readSnapshotVersion: 14,
    currentLedgerVersion: 14,
    hasEvidenceConflict: true,
    requestedScope: 'care-continuity',
    consentedScopes: ['care-continuity'],
    criticalFactCount: 5,
    unnecessaryDisclosureCount: 0,
    description: {
      vi: 'Đề xuất cập nhật mâu thuẫn với bản ghi liều lượng có nguồn gốc bằng chứng trong snapshot hiện hành.',
      en: 'Proposed update contradicts an existing provenance-linked dosage record in the current snapshot.',
    },
  },
  {
    id: 'unscoped-disclosure',
    label: {
      vi: 'Tiết lộ ngoài phạm vi đồng thuận',
      en: 'Unconsented External Disclosure',
    },
    readSnapshotVersion: 14,
    currentLedgerVersion: 14,
    hasEvidenceConflict: false,
    requestedScope: 'marketing-analytics',
    consentedScopes: ['care-continuity'],
    criticalFactCount: 2,
    unnecessaryDisclosureCount: 6,
    description: {
      vi: 'Bản tóm tắt đầu ra yêu cầu chia sẻ ngoài mục đích lâm sàng, vượt quá ranh giới đồng thuận hiện hành.',
      en: 'Outbound summary requests non-clinical sharing outside the patient’s active purpose/consent boundary.',
    },
  },
];

export function filterAndSortProjects(
  projects: ProjectItem[],
  lens: PerspectiveLens,
  category: ProjectCategory
): ProjectItem[] {
  const filtered = projects.filter((project) => {
    if (category !== 'all' && project.category !== category) {
      return false;
    }
    return true;
  });

  if (lens === 'hospitality') {
    return [...filtered].sort((a, b) => a.hospitalityPriority - b.hospitalityPriority);
  }
  if (lens === 'research') {
    return [...filtered].sort((a, b) => a.researchPriority - b.researchPriority);
  }
  return filtered;
}

export function filterPublications(
  publications: PublicationItem[],
  track: PublicationTrack
): PublicationItem[] {
  if (track === 'all') {
    return publications;
  }
  return publications.filter((pub) => pub.track === track);
}

export function filterBlogPosts(posts: BlogPost[], category: BlogCategory): BlogPost[] {
  if (category === 'all') {
    return posts;
  }
  return posts.filter((post) => post.category === category);
}

export function findBlogPostBySlug(posts: BlogPost[], slug: string | null): BlogPost | null {
  if (!slug) return null;
  return posts.find((post) => post.slug === slug) ?? null;
}

export function formatBibtexCitation(pub: PublicationItem): string {
  const statusEn = pub.statusLabel.en;
  const detailsEn = pub.details.en;
  const entryType = statusEn.toLowerCase().includes('poster') ? 'misc' : 'inproceedings';
  return [
    `@${entryType}{${pub.bibtexKey},`,
    `  author = {${pub.authors}},`,
    `  title = {${pub.title}},`,
    `  booktitle = {${pub.venue}},`,
    `  year = {${pub.year}},`,
    `  note = {${statusEn} (${detailsEn})}`,
    `}`,
  ].join('\n');
}

export function evaluateGlhsCommit(
  scenario: GlhsScenario,
  lang: Language = 'en'
): GlhsEvaluationResult {
  const isScopeConsented = scenario.consentedScopes.includes(scenario.requestedScope);
  if (!isScopeConsented) {
    return {
      decision: 'DISCLOSURE_WITHHELD',
      statusText: lang === 'vi' ? 'Chặn tiết lộ dữ liệu' : 'Disclosure Withheld',
      reason:
        lang === 'vi'
          ? `Phạm vi "${scenario.requestedScope}" nằm ngoài đồng thuận hiện hành (${scenario.consentedScopes.join(', ')}). Đã chặn ${scenario.unnecessaryDisclosureCount} trường ngoài phạm vi và bảo toàn ${scenario.criticalFactCount} dữ kiện trọng yếu.`
          : `Scope "${scenario.requestedScope}" is outside consented boundaries (${scenario.consentedScopes.join(', ')}). ${scenario.unnecessaryDisclosureCount} non-consented fields blocked while ${scenario.criticalFactCount} critical facts stay intact.`,
      criticalFactsRetained: scenario.criticalFactCount,
      disclosuresWithheld: scenario.unnecessaryDisclosureCount,
      commitAllowed: false,
    };
  }

  if (scenario.readSnapshotVersion < scenario.currentLedgerVersion) {
    return {
      decision: 'DEFERRED_RECONCILE',
      statusText: lang === 'vi' ? 'Hoãn để đối chiếu lại' : 'Deferred for Re-Read',
      reason:
        lang === 'vi'
          ? `Phát hiện lệch snapshot (đọc v${scenario.readSnapshotVersion} so với sổ cái v${scenario.currentLedgerVersion}). Tạm dừng commit để nạp bằng chứng đến muộn mà không ghi đè dữ liệu mới hơn.`
          : `Snapshot drift detected (read v${scenario.readSnapshotVersion} vs. ledger v${scenario.currentLedgerVersion}). Commit paused to ingest late-arriving evidence without overwriting newer records.`,
      criticalFactsRetained: scenario.criticalFactCount,
      disclosuresWithheld: 0,
      commitAllowed: false,
    };
  }

  if (scenario.hasEvidenceConflict) {
    return {
      decision: 'DEFERRED_RECONCILE',
      statusText: lang === 'vi' ? 'Leo thang xử lý xung đột' : 'Conflict Escalated',
      reason:
        lang === 'vi'
          ? 'Phát hiện xung đột nguồn gốc bằng chứng với bản ghi trong snapshot hiện hành. Từ chối ghi chờ đối chiếu; toàn bộ dữ kiện nền quan trọng được giữ nguyên.'
          : 'Provenance conflict detected against active snapshot record. Write rejected pending evidence reconciliation; all critical baseline facts preserved.',
      criticalFactsRetained: scenario.criticalFactCount,
      disclosuresWithheld: 0,
      commitAllowed: false,
    };
  }

  return {
    decision: 'ADMITTED',
    statusText: lang === 'vi' ? 'Phê duyệt commit' : 'Commit Admitted',
    reason:
      lang === 'vi'
        ? `Snapshot v${scenario.readSnapshotVersion} khớp đầu sổ cái và phạm vi "${scenario.requestedScope}" đã xác thực. Bản cập nhật gắn nguồn gốc được chấp nhận an toàn.`
        : `Snapshot v${scenario.readSnapshotVersion} matches ledger head and scope "${scenario.requestedScope}" is verified. Provenance-linked update admitted cleanly.`,
    criticalFactsRetained: scenario.criticalFactCount,
    disclosuresWithheld: 0,
    commitAllowed: true,
  };
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  input: ContactFormInput,
  lang: Language = 'en'
): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  const isVi = lang === 'vi';

  if (!input.name.trim()) {
    errors.name = isVi ? 'Vui lòng nhập họ và tên của bạn.' : 'Please enter your name.';
  } else if (input.name.trim().length < 2) {
    errors.name = isVi
      ? 'Họ và tên cần có ít nhất 2 ký tự.'
      : 'Name must be at least 2 characters.';
  }

  if (!input.email.trim()) {
    errors.email = isVi ? 'Vui lòng nhập địa chỉ email.' : 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = isVi
      ? 'Vui lòng nhập địa chỉ email hợp lệ.'
      : 'Please enter a valid email address.';
  }

  if (!input.subject.trim()) {
    errors.subject = isVi ? 'Vui lòng nhập chủ đề liên hệ.' : 'Please enter a subject.';
  } else if (input.subject.trim().length < 3) {
    errors.subject = isVi
      ? 'Chủ đề cần có ít nhất 3 ký tự.'
      : 'Subject must be at least 3 characters.';
  }

  if (!input.message.trim()) {
    errors.message = isVi
      ? 'Vui lòng nhập nội dung tin nhắn.'
      : 'Please include a short note about your inquiry.';
  } else if (input.message.trim().length < 12) {
    errors.message = isVi
      ? 'Vui lòng chia sẻ thêm chi tiết (ít nhất 12 ký tự).'
      : 'Please share a bit more detail (at least 12 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculateScrollProgress(
  scrollY: number,
  scrollHeight: number,
  viewportHeight: number
): number {
  if (
    !Number.isFinite(scrollY) ||
    !Number.isFinite(scrollHeight) ||
    !Number.isFinite(viewportHeight)
  ) {
    return 0;
  }
  const scrollableDistance = scrollHeight - viewportHeight;
  if (scrollableDistance <= 0) {
    return 0;
  }
  const ratio = scrollY / scrollableDistance;
  const clamped = Math.min(1, Math.max(0, ratio));
  return Math.round(clamped * 1000) / 10;
}

export function countBlogPostWords(post: BlogPost, lang: Language = 'vi'): number {
  const localized = post.content[lang];
  const chunks: string[] = [localized.title, localized.excerpt];
  if (localized.epigraph) {
    chunks.push(
      localized.epigraph.quote,
      localized.epigraph.attribution ?? '',
      localized.epigraph.translation ?? ''
    );
  }
  if (localized.pullQuote) {
    chunks.push(localized.pullQuote);
  }
  for (const section of localized.sections) {
    if (section.heading) chunks.push(section.heading);
    chunks.push(...section.paragraphs);
    if (section.formula) {
      chunks.push(section.formula.label ?? '', section.formula.expression);
    }
    if (section.list) {
      for (const item of section.list.items) {
        chunks.push(item.lead ?? '', item.text);
      }
    }
    if (section.afterListParagraphs) {
      chunks.push(...section.afterListParagraphs);
    }
    if (section.quote) {
      chunks.push(section.quote.text, section.quote.translation ?? '');
    }
    if (section.note) {
      chunks.push(section.note.label, section.note.content);
    }
  }
  return chunks
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
