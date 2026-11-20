import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface TopNavProps {
  lang: Language;
  onChangeLanguage: (lang: Language) => void;
  onOpenCvModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function TopNav({
  lang,
  onChangeLanguage,
  onOpenCvModal,
  onNavigateSection,
}: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const ui = getUiCopy(lang);

  const navLinks = [
    { label: ui.nav.caseStudies, href: '#case-studies', id: 'case-studies' },
    { label: ui.nav.research, href: '#research', id: 'research' },
    { label: ui.nav.writing, href: '#blog', id: 'blog' },
    { label: ui.nav.background, href: '#experience', id: 'experience' },
    { label: ui.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setMobileOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-[1060px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single-element minimal wordmark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, 'top')}
          className="text-sm font-medium tracking-[-0.015em] text-[#111111] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
        >
          {PROFILE.name[lang]}
        </a>

        {/* Zone 2: 5 single-line text links */}
        <nav
          aria-label={ui.nav.primaryNavLabel}
          className="hidden md:flex items-center gap-7 text-[13px] text-neutral-500"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="py-1 whitespace-nowrap shrink-0 hover:text-[#111111] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Minimal VI/EN switcher + Download CV */}
        <div className="flex items-center gap-4 shrink-0">
          <div
            role="group"
            aria-label={ui.nav.langSwitchLabel}
            data-testid="language-switcher"
            className="inline-flex items-center gap-1.5 font-mono text-xs select-none"
          >
            <button
              type="button"
              onClick={() => onChangeLanguage('vi')}
              aria-pressed={lang === 'vi'}
              aria-label="Tiếng Việt"
              className={`px-1 py-0.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                lang === 'vi'
                  ? 'text-[#111111] font-medium underline underline-offset-4 decoration-[#111111]'
                  : 'text-neutral-500 hover:text-[#111111]'
              }`}
            >
              VI
            </button>
            <span className="text-neutral-300" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => onChangeLanguage('en')}
              aria-pressed={lang === 'en'}
              aria-label="English"
              className={`px-1 py-0.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                lang === 'en'
                  ? 'text-[#111111] font-medium underline underline-offset-4 decoration-[#111111]'
                  : 'text-neutral-500 hover:text-[#111111]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenCvModal}
            className="hidden md:inline-flex items-center justify-center px-3.5 py-1.5 text-[13px] font-medium text-[#111111] border border-neutral-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            {ui.nav.downloadCv}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? ui.nav.closeMenu : ui.nav.openMenu}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-neutral-800 hover:text-[#111111] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label={ui.nav.mobileNavLabel}
          className="md:hidden border-t border-neutral-100 bg-white px-6 py-5 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="block py-2.5 text-sm text-neutral-700 hover:text-[#111111] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-100">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenCvModal();
              }}
              className="w-full py-2.5 px-4 text-sm font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {ui.nav.downloadCv}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
