import { ArrowUpRight, Download, X } from 'lucide-react';
import { useEffect } from 'react';
import { PROFILE } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface CvDossierModalProps {
  lang: Language;
  open: boolean;
  onClose: () => void;
}

export function CvDossierModal({ lang, open, onClose }: CvDossierModalProps) {
  const ui = getUiCopy(lang);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-dossier-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 sm:px-8 py-6 border-b border-neutral-200">
          <div>
            <p className="font-mono text-xs text-neutral-500">{ui.cvModal.updatedLabel}</p>
            <h3
              id="cv-dossier-title"
              className="text-xl font-medium text-[#111111] mt-1 tracking-[-0.02em]"
            >
              {ui.cvModal.heading}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.cvModal.closeAria}
            className="inline-flex items-center justify-center w-9 h-9 text-neutral-500 hover:text-[#111111] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 sm:px-8 divide-y divide-neutral-200">
          <div className="py-6">
            <h4 className="text-base font-medium text-[#111111]">{ui.cvModal.researchTitle}</h4>
            <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
              {ui.cvModal.researchDesc}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <a
                href={PROFILE.researchCvPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-colors"
              >
                <span>{ui.cvModal.openPdf}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={PROFILE.researchCvPath}
                download="Nguyen_Ngoc_Thien_Research_CS_AI_CV_2026.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-[#111111] transition-colors"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{ui.cvModal.downloadPdf}</span>
              </a>
            </div>
          </div>

          <div className="py-6">
            <h4 className="text-base font-medium text-[#111111]">{ui.cvModal.hospitalityTitle}</h4>
            <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
              {ui.cvModal.hospitalityDesc}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <a
                href={PROFILE.hospitalityCvPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-colors"
              >
                <span>{ui.cvModal.openPdf}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={PROFILE.hospitalityCvPath}
                download="Nguyen_Ngoc_Thien_Luxury_Hospitality_Business_CV_2026.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-[#111111] transition-colors"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{ui.cvModal.downloadPdf}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
