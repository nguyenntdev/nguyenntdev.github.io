import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface BlogSectionProps {
  lang: Language;
  onOpenPost: (slug: string) => void;
}

export function BlogSection({ lang, onOpenPost }: BlogSectionProps) {
  const ui = getUiCopy(lang);

  return (
    <section id="blog" className="py-24 sm:py-28 bg-white border-t border-neutral-200">
      <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
        {/* Minimal Unified Header */}
        <div className="pb-10 border-b border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-[-0.025em]">
            {ui.blog.heading}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{ui.blog.subtitle}</p>
        </div>

        {/* Unified Minimal Essay Index */}
        <div data-testid="blog-grid" className="divide-y divide-neutral-200">
          {BLOG_POSTS.map((post) => {
            const localized = post.content[lang];
            return (
              <article
                key={post.slug}
                className="py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start"
              >
                <div className="lg:col-span-3">
                  <time className="font-mono text-xs text-neutral-500 tabular-nums block">
                    {localized.date}
                  </time>
                  <p className="text-xs text-neutral-500 mt-1">
                    {localized.categoryLabel} · {localized.readTime}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="text-lg sm:text-xl font-medium text-[#111111] leading-snug tracking-[-0.015em]">
                    {localized.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-[1.7] max-w-[62ch]">
                    {localized.excerpt}
                  </p>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end">
                  <button
                    type="button"
                    onClick={() => onOpenPost(post.slug)}
                    aria-label={`${ui.blog.readArticleAriaPrefix} ${localized.title}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:opacity-65 transition-opacity whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
                  >
                    <span>{ui.blog.readButton}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
