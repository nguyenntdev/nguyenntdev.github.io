import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS, PROFILE, type BlogPost } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';

interface BlogPostPageProps {
  lang: Language;
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (slug: string) => void;
}

export function BlogPostPage({ lang, post, onBack, onSelectPost }: BlogPostPageProps) {
  const ui = getUiCopy(lang);
  const localized = post.content[lang];
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < BLOG_POSTS.length - 1
      ? BLOG_POSTS[currentIndex + 1]
      : null;

  return (
    <article
      data-testid="blog-detail-page"
      className="min-h-[calc(100vh-4rem)] bg-white py-16 sm:py-24"
    >
      <div className="max-w-[700px] mx-auto px-6 sm:px-8">
        {/* Minimal Back Navigation */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[13px] text-neutral-500 hover:text-[#111111] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{ui.blog.backToPortfolio}</span>
        </button>

        {/* Zen Centered Essay Header */}
        <header className="mt-10 pb-10 border-b border-neutral-200">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <span>{localized.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <time className="font-mono tabular-nums">{localized.date}</time>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{localized.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.name[lang]}</span>
          </div>

          <h1
            className="font-medium text-[#111111] mt-5 tracking-[-0.03em] leading-[1.15] text-balance"
            style={{ fontSize: 'clamp(1.85rem, 3.6vw, 2.75rem)' }}
          >
            {localized.title}
          </h1>

          <p className="mt-5 text-base text-neutral-500 leading-[1.75]">{localized.excerpt}</p>

          {localized.epigraph && (
            <div className="mt-7 pl-4 border-l border-neutral-300 space-y-1.5">
              <p className="text-sm italic text-[#111111] leading-[1.75]">
                {localized.epigraph.quote}
              </p>
              {localized.epigraph.attribution && (
                <p className="text-xs text-neutral-500">— {localized.epigraph.attribution}</p>
              )}
              {localized.epigraph.translation && (
                <p className="text-xs text-neutral-500 italic leading-[1.7]">
                  ({localized.epigraph.translation})
                </p>
              )}
            </div>
          )}
        </header>

        {/* Pure Single-Column Reading Flow */}
        <div className="mt-14 space-y-14">
          {localized.sections.map((section, idx) => (
            <section key={section.heading ?? `body-${idx}`}>
              {section.heading && (
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-mono text-xs text-neutral-500 tabular-nums shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-lg sm:text-[21px] font-medium text-[#111111] tracking-[-0.02em] leading-snug">
                    {section.heading}
                  </h2>
                </div>
              )}

              <div className="space-y-5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={`${idx}-p-${pIdx}`}
                    className="text-[15.5px] text-neutral-700 leading-[1.9]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.formula && (
                <div className="my-7 px-5 py-4 bg-[#FAFAFA] border border-neutral-200 overflow-x-auto">
                  {section.formula.label && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-neutral-500 mb-2">
                      {section.formula.label}
                    </p>
                  )}
                  <p className="font-mono text-xs sm:text-[13.5px] text-[#111111] whitespace-nowrap">
                    {section.formula.expression}
                  </p>
                </div>
              )}

              {section.quote && (
                <blockquote className="my-8 pl-5 border-l-2 border-[#111111] py-1 space-y-2">
                  <p className="text-[15.5px] italic text-[#111111] leading-[1.85]">
                    {section.quote.text}
                  </p>
                  {section.quote.translation && (
                    <p className="text-sm text-neutral-500 italic leading-[1.8]">
                      ({section.quote.translation})
                    </p>
                  )}
                </blockquote>
              )}

              {section.list && (
                section.list.ordered ? (
                  <ol className="my-6 space-y-4 pl-0 list-none">
                    {section.list.items.map((item, lIdx) => (
                      <li
                        key={`${idx}-ol-${lIdx}`}
                        className="flex items-baseline gap-3.5 text-[15px] text-neutral-700 leading-[1.85]"
                      >
                        <span className="font-mono text-xs text-neutral-500 tabular-nums shrink-0">
                          {lIdx + 1}.
                        </span>
                        <span>
                          {item.lead && (
                            <strong className="font-medium text-[#111111]">{item.lead} </strong>
                          )}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="my-6 space-y-3.5 pl-4 border-l border-neutral-200">
                    {section.list.items.map((item, lIdx) => (
                      <li
                        key={`${idx}-ul-${lIdx}`}
                        className="text-[15px] text-neutral-700 leading-[1.85]"
                      >
                        {item.lead && (
                          <strong className="font-medium text-[#111111]">{item.lead} </strong>
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )
              )}

              {section.afterListParagraphs && section.afterListParagraphs.length > 0 && (
                <div className="mt-5 space-y-5">
                  {section.afterListParagraphs.map((paragraph, aIdx) => (
                    <p
                      key={`${idx}-ap-${aIdx}`}
                      className="text-[15.5px] text-neutral-700 leading-[1.9]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.note && (
                <aside className="mt-7 pl-5 border-l-2 border-[#111111] py-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-neutral-500">
                    {section.note.label}
                  </p>
                  <p className="mt-1.5 text-sm text-neutral-700 leading-[1.8]">
                    {section.note.content}
                  </p>
                </aside>
              )}
            </section>
          ))}
        </div>

        {/* Quiet Hairline Pull Quote */}
        {localized.pullQuote && (
          <blockquote className="my-12 py-6 border-y border-neutral-200">
            <p className="text-base sm:text-lg text-[#111111] leading-relaxed font-normal">
              “{localized.pullQuote}”
            </p>
          </blockquote>
        )}

        {/* Optional External Press Reference */}
        {localized.externalReference && (
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <p className="text-xs text-neutral-500">{ui.blog.externalPressLabel}</p>
              <p className="text-sm text-[#111111] mt-1">{localized.externalReference.label}</p>
            </div>
            <a
              href={localized.externalReference.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:opacity-65 transition-opacity whitespace-nowrap shrink-0 underline underline-offset-4 decoration-neutral-300"
            >
              <span>{ui.blog.readOnVnExpress}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        )}

        {/* Minimal Previous / Next Essay Links */}
        <nav
          aria-label={ui.blog.articleNavAria}
          className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {prevPost ? (
            <button
              type="button"
              onClick={() => onSelectPost(prevPost.slug)}
              className="text-left group cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                <span>{ui.blog.previous}</span>
              </span>
              <span className="block text-sm font-medium text-[#111111] group-hover:opacity-65 mt-1.5 leading-snug transition-opacity">
                {prevPost.content[lang].title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextPost && (
            <button
              type="button"
              onClick={() => onSelectPost(nextPost.slug)}
              className="text-left sm:text-right group cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 sm:justify-end">
                <span>{ui.blog.next}</span>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </span>
              <span className="block text-sm font-medium text-[#111111] group-hover:opacity-65 mt-1.5 leading-snug transition-opacity">
                {nextPost.content[lang].title}
              </span>
            </button>
          )}
        </nav>
      </div>
    </article>
  );
}
