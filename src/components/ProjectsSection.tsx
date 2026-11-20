import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ lang, onSelectProject }: ProjectsSectionProps) {
  const ui = getUiCopy(lang);

  return (
    <section id="case-studies" className="py-24 sm:py-28 bg-white border-t border-neutral-200">
      <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
        {/* Minimal Unified Section Header */}
        <div className="pb-10 border-b border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-[-0.025em]">
            {ui.projects.heading}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{ui.projects.subtitle}</p>
        </div>

        {/* Unified Pure Typographic Case Study Index */}
        <div data-testid="projects-grid" className="divide-y divide-neutral-200">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
            >
              {/* Left 4 Columns: Title, Context, Tabular Results */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <p className="font-mono text-xs text-neutral-500 tabular-nums">
                    {project.period[lang]} · {project.location[lang]}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#111111] tracking-[-0.02em] mt-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-neutral-500 mt-1">{project.role[lang]}</p>
                </div>

                {/* Minimal Results Table */}
                <dl className="space-y-2.5 pt-2">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div
                      key={metric.label.en}
                      className="flex items-baseline justify-between gap-4 text-xs"
                    >
                      <dt className="text-neutral-500">{metric.label[lang]}</dt>
                      <dd className="font-mono text-[#111111] tabular-nums shrink-0">
                        {metric.value[lang]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Right 8 Columns: Overview, Challenge, Solution, Action */}
              <div className="lg:col-span-8">
                <p className="text-[15px] text-neutral-700 leading-[1.75] max-w-[64ch]">
                  {project.summary[lang]}
                </p>

                <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[13.5px] leading-[1.7]">
                  <div>
                    <dt className="text-xs font-medium text-[#111111]">
                      {ui.projects.challengeLabel}
                    </dt>
                    <dd className="mt-1.5 text-neutral-600">{project.challenge[lang]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-[#111111]">
                      {ui.projects.solutionLabel}
                    </dt>
                    <dd className="mt-1.5 text-neutral-600">{project.solution[lang]}</dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-neutral-500">{project.stack.join(' · ')}</p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`${ui.projects.inspectAriaPrefix} ${project.title}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:opacity-65 transition-opacity whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
                  >
                    <span>
                      {project.interactiveType === 'glhs-simulator'
                        ? ui.projects.openGlhsCta
                        : ui.projects.readCaseStudyCta}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
