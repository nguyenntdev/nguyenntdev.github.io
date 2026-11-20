import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Facebook,
  Github,
  Linkedin,
  Newspaper,
  Send,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PROFILE } from '../data/portfolioData';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';
import { validateContactForm, type ContactFormInput } from '../utils/portfolioLogic';

interface ContactFooterSectionProps {
  lang: Language;
}

export function ContactFooterSection({ lang }: ContactFooterSectionProps) {
  const ui = getUiCopy(lang);
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormInput | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const socialChannels = [
    {
      name: 'LinkedIn',
      handle: PROFILE.linkedinHandle,
      href: PROFILE.linkedinUrl,
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      handle: PROFILE.githubHandle,
      href: PROFILE.githubUrl,
      icon: Github,
    },
    {
      name: 'Facebook',
      handle: PROFILE.facebookHandle,
      href: PROFILE.facebookUrl,
      icon: Facebook,
    },
    {
      name: lang === 'vi' ? 'Báo VnExpress' : 'VnExpress Press',
      handle: lang === 'vi' ? 'Phóng sự công nghệ (2021)' : 'Technology Feature (2021)',
      href: PROFILE.vnexpressUrl,
      icon: Newspaper,
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(form, lang);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedRecord({ ...form });
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      }
    } catch {
      // Fallback handled by visible email text
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2200);
  };

  const mailtoLink = submittedRecord
    ? `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        submittedRecord.subject
      )}&body=${encodeURIComponent(
        `${submittedRecord.message}\n\nFrom: ${submittedRecord.name} (${submittedRecord.email})`
      )}`
    : `mailto:${PROFILE.email}`;

  return (
    <section id="contact" className="pt-24 sm:pt-28 pb-14 bg-white border-t border-neutral-200">
      <div className="max-w-[1060px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 pb-20 border-b border-neutral-200">
          {/* Left 5 Cols: Contact Info, Social Channels & Curriculum Vitae */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-[-0.025em]">
                {ui.contact.heading}
              </h2>
              <p className="mt-3 text-sm text-neutral-500 leading-[1.75]">{ui.contact.subtitle}</p>

              {/* Direct Email */}
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="font-medium text-[#111111] underline underline-offset-4 decoration-neutral-300 hover:decoration-[#111111] transition-colors"
                >
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={ui.contact.copyEmailAria}
                  className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-[#111111] transition-colors cursor-pointer"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      <span className="text-emerald-700">{ui.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{ui.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 font-mono text-xs text-neutral-500 tabular-nums">
                {PROFILE.location[lang]} · {PROFILE.phone}
              </p>

              {/* Social Media Links with Icons */}
              <div className="mt-10">
                <h3 className="text-xs font-medium text-neutral-500 mb-3">
                  {ui.contact.socialHeading}
                </h3>
                <div
                  data-testid="social-links"
                  className="divide-y divide-neutral-100 border-y border-neutral-200"
                >
                  {socialChannels.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-3 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Icon
                            className="w-4 h-4 text-neutral-500 group-hover:text-[#111111] shrink-0 transition-colors"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-[#111111] group-hover:opacity-70 transition-opacity">
                            {social.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs font-mono text-neutral-500 truncate">
                            {social.handle}
                          </span>
                          <ArrowUpRight
                            className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#111111] shrink-0 transition-colors"
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Minimal Curriculum Vitae Links */}
            <div>
              <h3 className="text-xs font-medium text-neutral-500 mb-3">{ui.contact.cvHeading}</h3>
              <div className="divide-y divide-neutral-100 border-y border-neutral-200">
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <p className="text-sm text-[#111111]">{ui.contact.researchCvLabel}</p>
                  <div className="flex items-center gap-4 text-xs shrink-0">
                    <a
                      href={PROFILE.researchCvPath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#111111] hover:opacity-65 transition-opacity"
                    >
                      <span>{ui.contact.open}</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                    <a
                      href={PROFILE.researchCvPath}
                      download
                      className="inline-flex items-center gap-1 text-neutral-500 hover:text-[#111111] transition-colors"
                    >
                      <Download className="w-3 h-3" aria-hidden="true" />
                      <span>{ui.contact.pdf}</span>
                    </a>
                  </div>
                </div>

                <div className="py-3.5 flex items-center justify-between gap-4">
                  <p className="text-sm text-[#111111]">{ui.contact.hospitalityCvLabel}</p>
                  <div className="flex items-center gap-4 text-xs shrink-0">
                    <a
                      href={PROFILE.hospitalityCvPath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#111111] hover:opacity-65 transition-opacity"
                    >
                      <span>{ui.contact.open}</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                    <a
                      href={PROFILE.hospitalityCvPath}
                      download
                      className="inline-flex items-center gap-1 text-neutral-500 hover:text-[#111111] transition-colors"
                    >
                      <Download className="w-3 h-3" aria-hidden="true" />
                      <span>{ui.contact.pdf}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Pure Minimalist Unboxed Contact Form */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-medium text-[#111111]">{ui.contact.formHeading}</h3>
            <p className="text-xs text-neutral-500 mt-1">{ui.contact.formSubtitle}</p>

            {submittedRecord ? (
              <div
                data-testid="contact-confirmation"
                className="mt-8 p-6 border border-neutral-200 bg-[#FAFAFA]"
              >
                <p className="text-sm font-medium text-[#111111]">
                  {ui.contact.readyTitle} {PROFILE.name[lang]}
                </p>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  {ui.contact.readyBodyPrefix}{' '}
                  <strong className="font-medium text-[#111111]">{submittedRecord.name}</strong>
                  {ui.contact.readyBodyMid}{' '}
                  <strong className="font-medium text-[#111111]">
                    “{submittedRecord.subject}”
                  </strong>{' '}
                  {ui.contact.readyBodySuffix}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{ui.contact.openEmailClient}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRecord(null);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-medium text-neutral-600 hover:text-[#111111] underline underline-offset-4 decoration-neutral-300 cursor-pointer"
                  >
                    {ui.contact.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs text-neutral-500 mb-2"
                    >
                      {ui.contact.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={ui.contact.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      className="w-full px-0 py-2.5 text-sm text-[#111111] placeholder:text-neutral-300 border-b border-neutral-200 focus:border-[#111111] bg-transparent focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs text-red-700">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs text-neutral-500 mb-2"
                    >
                      {ui.contact.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder={ui.contact.emailPlaceholder}
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-0 py-2.5 text-sm text-[#111111] placeholder:text-neutral-300 border-b border-neutral-200 focus:border-[#111111] bg-transparent focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs text-neutral-500 mb-2"
                  >
                    {ui.contact.subjectLabel}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, subject: e.target.value }));
                      if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                    }}
                    placeholder={ui.contact.subjectPlaceholder}
                    aria-invalid={Boolean(errors.subject)}
                    className="w-full px-0 py-2.5 text-sm text-[#111111] placeholder:text-neutral-300 border-b border-neutral-200 focus:border-[#111111] bg-transparent focus:outline-none transition-colors"
                  />
                  {errors.subject && (
                    <p role="alert" className="mt-1.5 text-xs text-red-700">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-neutral-500 mb-2"
                  >
                    {ui.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder={ui.contact.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-0 py-2.5 text-sm text-[#111111] placeholder:text-neutral-300 border-b border-neutral-200 focus:border-[#111111] bg-transparent focus:outline-none transition-colors resize-y"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-[13px] font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                  >
                    <span>{ui.contact.submitButton}</span>
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Whisper Footer */}
        <footer className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © 2026 {PROFILE.name[lang]} · {PROFILE.location[lang]}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors"
            >
              Facebook
            </a>
            <a href="#top" className="hover:text-[#111111] transition-colors">
              {ui.contact.topLink}
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
