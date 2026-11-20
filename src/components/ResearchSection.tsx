import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { PUBLICATIONS, type PublicationItem } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';
import { formatBibtexCitation } from '../utils/portfolioLogic';

interface ResearchSectionProps {
  lang: Language;
}

export function ResearchSection({ lang }: ResearchSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedBibId, setExpandedBibId] = useState<string | null>(null);
  const ui = getUiCopy(lang);

  const handleCopyBibtex = async (pub: PublicationItem) => {
    const bibtex = formatBibtexCitation(pub);
    setExpandedBibId(pub.id);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(bibtex);
      }
    } catch {
      // Fallback: expanded BibTeX block remains visible for manual selection
    }
    setCopiedId(pub.id);
    window.setTimeout(() => {
      setCopiedId((current) => (current === pub.id ? null : current));
    }, 2400);
  };

  return (
    <section id="research" className="py-24 sm:py-28 bg-white border-t border-neutral-200">
      <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
        {/* Minimal Unified Header */}
        <div className="pb-10 border-b border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-[-0.025em]">
            {ui.research.heading}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{ui.research.subtitle}</p>
        </div>

        {/* Clean Unified Bibliography List */}
        <div data-testid="publications-list" className="divide-y divide-neutral-200">
          {PUBLICATIONS.map((pub) => {
            const isCopied = copiedId === pub.id;
            const isExpanded = expandedBibId === pub.id;
            return (
              <article
                key={pub.id}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start"
              >
                {/* Left Column: Venue & Status */}
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs text-[#111111] tabular-nums">{pub.venue}</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {pub.statusLabel[lang]} · {pub.authorship[lang]}
                  </p>
                </div>

                {/* Middle Column: Citation */}
                <div className="lg:col-span-7">
                  <h3 className="text-[17px] sm:text-lg font-medium text-[#111111] leading-snug tracking-[-0.015em]">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{pub.authors}</p>
                  <p className="mt-1 font-mono text-xs text-neutral-500 tabular-nums">
                    {pub.details[lang]}
                  </p>

                  {isExpanded && (
                    <pre className="mt-4 p-4 bg-[#FAFAFA] border border-neutral-200 text-xs font-mono text-neutral-700 whitespace-pre-wrap break-words leading-relaxed">
                      {formatBibtexCitation(pub)}
                    </pre>
                  )}
                </div>

                {/* Right Column: Minimal BibTeX Action */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <button
                    type="button"
                    onClick={() => handleCopyBibtex(pub)}
                    aria-label={`${ui.research.copyBibtexAriaPrefix} ${pub.venue}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-[#111111] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                        <span className="text-emerald-700">{ui.research.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{ui.research.bibtex}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
