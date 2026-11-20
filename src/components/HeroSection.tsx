import { ArrowDownRight } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface HeroSectionProps {
  lang: Language;
  onOpenCvModal: () => void;
}

export function HeroSection({ lang, onOpenCvModal }: HeroSectionProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const ui = getUiCopy(lang);

  return (
    <section id="top" className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 bg-white">
      <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
        {/* Minimalist Asymmetric 12-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Unified Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-[13px] text-neutral-500">{PROFILE.hero.kicker[lang]}</p>

              <h1
                className="font-normal text-[#111111] tracking-[-0.035em] leading-[1.1] text-balance mt-6"
                style={{ fontSize: 'clamp(2.15rem, 3.9vw, 3.35rem)' }}
              >
                {PROFILE.hero.headline[lang]}
              </h1>

              <p className="mt-7 text-[15px] sm:text-base leading-[1.75] text-neutral-600 max-w-[56ch]">
                {PROFILE.hero.lead[lang]}
              </p>
            </div>

            {/* Minimal Primary & Secondary Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                <span>{ui.hero.primaryCta}</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="text-[13px] font-medium text-neutral-600 hover:text-[#111111] underline underline-offset-4 decoration-neutral-300 hover:decoration-[#111111] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
              >
                {ui.hero.secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Unframed Editorial Portrait */}
          <div className="lg:col-span-5 flex flex-col">
            <figure className="flex flex-col flex-1">
              <div className="relative flex-1 min-h-[340px] sm:min-h-[390px] lg:min-h-[420px] overflow-hidden bg-neutral-100">
                {!imageFailed ? (
                  <img
                    src={PROFILE.portraitPath}
                    alt={ui.hero.portraitAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="w-full h-full object-cover object-[center_18%]"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-100 flex flex-col justify-end p-8 text-[#111111]">
                    <p className="text-xl font-medium">{PROFILE.name[lang]}</p>
                    <p className="text-xs text-neutral-500 mt-1">{PROFILE.location[lang]}</p>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-neutral-500">
                <span>{PROFILE.portraitCaption[lang]}</span>
                <span className="font-mono tabular-nums shrink-0">2025</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Minimal 4-Column Proof Strip */}
        <div
          aria-label={ui.hero.metricsAriaLabel}
          className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROFILE.proofMetrics.map((metric) => (
            <div key={metric.label.en}>
              <p className="font-mono text-2xl font-normal text-[#111111] tabular-nums tracking-tight">
                {metric.value[lang]}
              </p>
              <p className="mt-2 text-[13px] font-medium text-[#111111]">{metric.label[lang]}</p>
              <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                {metric.detail[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
