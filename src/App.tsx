import { useEffect, useState } from 'react';
import { BlogPostPage } from './components/BlogPostPage';
import { BlogSection } from './components/BlogSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactFooterSection } from './components/ContactFooterSection';
import { CvDossierModal } from './components/CvDossierModal';
import { ExperienceHonorsSection } from './components/ExperienceHonorsSection';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { ResearchSection } from './components/ResearchSection';
import { TopNav } from './components/TopNav';
import { BLOG_POSTS, type ProjectItem } from './data/portfolioData';
import { getUiCopy } from './data/uiCopy';
import {
  LANGUAGE_STORAGE_KEY,
  getBrowserInitialLanguage,
  type Language,
} from './utils/i18n';
import { findBlogPostBySlug } from './utils/portfolioLogic';

function parseBlogSlugFromHash(hash: string): string | null {
  const match = hash.match(/^#\/blog\/([a-z0-9-]+)$/i);
  return match ? match[1] : null;
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => getBrowserInitialLanguage());
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(() =>
    typeof window !== 'undefined' ? parseBlogSlugFromHash(window.location.hash) : null
  );

  const ui = getUiCopy(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui.pageTitle;
  }, [lang, ui.pageTitle]);

  const handleLanguageChange = (nextLang: Language) => {
    setLang(nextLang);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
    } catch {
      // Ignore storage access restrictions
    }
  };

  useEffect(() => {
    const onHashChange = () => {
      setActiveBlogSlug(parseBlogSlugFromHash(window.location.hash));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (activeBlogSlug) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [activeBlogSlug]);

  const activePost = findBlogPostBySlug(BLOG_POSTS, activeBlogSlug);

  const openBlogPost = (slug: string) => {
    setActiveBlogSlug(slug);
    window.history.pushState(null, '', `#/blog/${slug}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  const navigateToSection = (sectionId: string) => {
    const wasOnBlog = Boolean(activePost);
    if (wasOnBlog) {
      setActiveBlogSlug(null);
      window.history.pushState(null, '', sectionId === 'top' ? '#' : `#${sectionId}`);
      window.setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 20);
      return;
    }

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <ReadingProgressBar
        resetKey={`${lang}:${activePost ? activePost.slug : 'portfolio'}`}
        label={activePost ? ui.progressBarBlog : ui.progressBarPortfolio}
      />

      <TopNav
        lang={lang}
        onChangeLanguage={handleLanguageChange}
        onOpenCvModal={() => setCvModalOpen(true)}
        onNavigateSection={navigateToSection}
      />

      {activePost ? (
        <main>
          <BlogPostPage
            lang={lang}
            post={activePost}
            onBack={() => navigateToSection('blog')}
            onSelectPost={openBlogPost}
          />
        </main>
      ) : (
        <main>
          <HeroSection lang={lang} onOpenCvModal={() => setCvModalOpen(true)} />

          <ProjectsSection lang={lang} onSelectProject={setActiveProject} />

          <ResearchSection lang={lang} />

          <BlogSection lang={lang} onOpenPost={openBlogPost} />

          <ExperienceHonorsSection lang={lang} />

          <ContactFooterSection lang={lang} />
        </main>
      )}

      <CaseStudyModal
        lang={lang}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
      <CvDossierModal lang={lang} open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
