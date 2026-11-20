import { ArrowUpRight } from 'lucide-react';
import {
  CERTIFICATIONS,
  EXPERIENCES,
  HONORS,
  PRESS_FEATURES,
  SKILL_GROUPS,
} from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface ExperienceHonorsSectionProps {
  lang: Language;
}

export function ExperienceHonorsSection({ lang }: ExperienceHonorsSectionProps) {
  const ui = getUiCopy(lang);
  const experienceItems = EXPERIENCES.filter((e) => e.group === 'experience');
  const educationItems = EXPERIENCES.filter((e) => e.group === 'education');
  const communityItems = EXPERIENCES.filter((e) => e.group === 'community');
  const headlineHonors = HONORS.filter((h) => h.tier === 'headline');
  const provincialHonors = HONORS.filter((h) => h.tier === 'provincial');

  return (
    <>
      {/* Unified Background: Experience, Education & Community */}
      <section id="experience" className="py-24 sm:py-28 bg-white border-t border-neutral-200">
        <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
          <div className="pb-10 border-b border-neutral-200">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-[-0.025em]">
              {ui.background.heading}
            </h2>
            <p className="mt-2 text-sm text-neutral-500">{ui.background.subtitle}</p>
          </div>

          <div className="divide-y divide-neutral-200">
            {[...experienceItems, ...educationItems, ...communityItems].map((item) => (
              <article
                key={item.id}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-start"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs text-neutral-500 tabular-nums">
                    {item.period[lang]}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">{item.location[lang]}</p>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="text-lg sm:text-xl font-medium text-[#111111] tracking-[-0.015em]">
                    {item.organization[lang]}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-0.5">{item.role[lang]}</p>
                  <p className="mt-3 text-sm sm:text-[15px] text-neutral-600 leading-[1.75] max-w-[64ch]">
                    {item.description[lang]}
                  </p>
                  <p className="mt-3 text-xs text-neutral-500">
                    {item.highlights[lang].join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Honors, Press & Capabilities */}
      <section id="honors" className="py-24 sm:py-28 bg-white border-t border-neutral-200">
        <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
          <div className="pb-10 border-b border-neutral-200">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-[-0.025em]">
              {ui.background.recognitionHeading}
            </h2>
            <p className="mt-2 text-sm text-neutral-500">{ui.background.recognitionSubtitle}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Left 7 Cols: Honors & Press */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h3 className="text-xs font-medium text-neutral-500 pb-4 border-b border-neutral-200">
                  {ui.background.honorsHeading}
                </h3>
                <ul className="divide-y divide-neutral-100">
                  {headlineHonors.map((honor) => (
                    <li
                      key={honor.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6"
                    >
                      <div>
                        <p className="text-sm font-medium text-[#111111]">{honor.award[lang]}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{honor.event[lang]}</p>
                      </div>
                      <span className="font-mono text-xs text-neutral-500 tabular-nums shrink-0">
                        {honor.year}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 pt-4 border-t border-neutral-200 space-y-2">
                  {provincialHonors.map((honor) => (
                    <li
                      key={honor.id}
                      className="text-xs text-neutral-500 flex flex-wrap justify-between gap-2"
                    >
                      <span>
                        <span className="text-[#111111] font-medium">{honor.award[lang]}</span> —{' '}
                        {honor.event[lang]}
                      </span>
                      <span className="font-mono text-neutral-500 tabular-nums">{honor.year}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unboxed VnExpress Press Feature */}
              <div>
                <h3 className="text-xs font-medium text-neutral-500 pb-4 border-b border-neutral-200">
                  {ui.background.pressHeading}
                </h3>
                {PRESS_FEATURES.map((press) => (
                  <article key={press.id} className="pt-5">
                    <div className="flex items-center justify-between gap-4 text-xs text-neutral-500">
                      <span>{press.outlet}</span>
                      <span className="font-mono tabular-nums">{press.year}</span>
                    </div>
                    <h4 className="text-lg font-medium text-[#111111] mt-2 leading-snug">
                      “{press.title}”
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 leading-[1.7]">
                      {press.summary[lang]}
                    </p>
                    <a
                      href={press.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:opacity-65 transition-opacity underline underline-offset-4 decoration-neutral-300"
                    >
                      <span>{ui.background.readOnVnExpress}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Capabilities & Certifications */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-xs font-medium text-neutral-500 pb-4 border-b border-neutral-200">
                  {ui.background.capabilitiesHeading}
                </h3>
                <dl className="divide-y divide-neutral-100">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.category.en} className="py-3.5">
                      <dt className="text-xs font-medium text-[#111111]">{group.category[lang]}</dt>
                      <dd className="mt-1 text-xs text-neutral-500 leading-relaxed">
                        {group.items[lang].join(' · ')}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-xs font-medium text-neutral-500 pb-4 border-b border-neutral-200">
                  {ui.background.certificationsHeading}
                </h3>
                <div className="mt-4 space-y-5">
                  {CERTIFICATIONS.map((group) => (
                    <div key={group.domain.en}>
                      <h4 className="text-xs font-medium text-[#111111]">{group.domain[lang]}</h4>
                      <ul className="mt-2 space-y-1.5">
                        {group.items.map((cert) => (
                          <li key={cert} className="text-xs text-neutral-500 leading-relaxed">
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
