import { ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';
import { GlhsSimulator } from './GlhsSimulator';

interface CaseStudyModalProps {
  lang: Language;
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ lang, project, onClose }: CaseStudyModalProps) {
  const ui = getUiCopy(lang);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 px-6 sm:px-9 py-6 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
          <div>
            <p className="font-mono text-xs text-neutral-500 tabular-nums">
              {project.period[lang]} · {project.role[lang]} · {project.location[lang]}
            </p>
            <h3
              id="case-study-title"
              className="text-xl sm:text-2xl font-medium text-[#111111] mt-1.5 tracking-[-0.02em]"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.projects.closeModalAria}
            className="inline-flex items-center justify-center w-9 h-9 text-neutral-500 hover:text-[#111111] transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-9 py-8 space-y-9">
          <p className="text-[15px] text-neutral-700 leading-[1.8]">{project.summary[lang]}</p>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-neutral-200">
            {project.metrics.map((metric) => (
              <div key={metric.label.en}>
                <p className="font-mono text-lg font-medium text-[#111111] tabular-nums">
                  {metric.value[lang]}
                </p>
                <p className="text-xs text-neutral-500 mt-1">{metric.label[lang]}</p>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-medium text-[#111111]">{ui.projects.challengeLabel}</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-[1.75]">
                {project.challenge[lang]}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#111111]">{ui.projects.solutionLabel}</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-[1.75]">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* Interactive GLHS Evaluator */}
          {project.interactiveType === 'glhs-simulator' && <GlhsSimulator lang={lang} />}

          {/* Outcomes */}
          <div>
            <h4 className="text-xs font-medium text-[#111111]">{ui.projects.verifiedResults}</h4>
            <ul className="mt-3 divide-y divide-neutral-100 border-t border-neutral-200">
              {project.outcomes[lang].map((outcome) => (
                <li key={outcome} className="py-3 text-sm text-neutral-700 leading-relaxed">
                  {outcome}
                </li>
              ))}
            </ul>
            {project.disclaimer && (
              <p className="mt-3 text-xs text-neutral-500">{project.disclaimer[lang]}</p>
            )}
          </div>

          {/* Stack & Links */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">{project.stack.join(' · ')}</p>
            <div className="flex items-center gap-4 shrink-0">
              {project.links.map((link) => (
                <a
                  key={link.label.en}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:opacity-65 transition-opacity underline underline-offset-4 decoration-neutral-300 whitespace-nowrap"
                >
                  <span>{link.label[lang]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
