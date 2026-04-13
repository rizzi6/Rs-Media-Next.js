'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eyebrow, H2, BtnBlue } from '@/components/UI';

const contactLinks = [
  { icon: '📧', label: 'Email', value: 'hello@rizwansaleem.com', href: 'mailto:hello@rizwansaleem.com' },
  { icon: '💬', label: 'WhatsApp', value: '+92 300 123 4567', href: 'https://wa.me/923001234567' },
  { icon: '💼', label: 'Upwork Profile', value: 'upwork.com/rizwansaleem', href: '#' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/rizwansaleem', href: '#' },
  { icon: '📍', label: 'Location', value: 'Pakistan — Serving Clients Globally', href: undefined },
];

const steps = [
  { icon: '📩', text: 'Application received and reviewed within 24 hours' },
  { icon: '📞', text: '30-minute discovery call scheduled if it\'s a good fit' },
  { icon: '🔍', text: 'Free full account and tracking audit delivered in writing' },
  { icon: '📋', text: 'Strategy recommendations provided — no obligation' },
  { icon: '🚀', text: 'Onboarding begins if both sides decide to proceed' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* PAGE HERO */}
      <div className="bg-white px-5 md:px-[72px] pt-[130px] pb-[100px] border-b border-border relative overflow-hidden">
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(26,82,255,.055) 0%,transparent 70%)' }} />
        <div className="max-w-[800px] relative">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted2 mb-6">
            <Link href="/" className="text-muted2 hover:text-blue transition-colors no-underline">Home</Link>
            <span>/</span><span className="text-ink">Work With Me</span>
          </div>
          <Eyebrow>Let&apos;s Talk</Eyebrow>
          <h1 className="font-syne font-extrabold leading-[1.02] tracking-[-3px] text-ink mb-6"
            style={{ fontSize: 'clamp(44px,6.5vw,88px)' }}>
            Ready to build<br />something <em className="not-italic font-fraunces font-light text-blue">profitable?</em>
          </h1>
          <p className="text-muted leading-[1.85]" style={{ fontSize: 'clamp(15px,1.7vw,17px)', maxWidth: 600 }}>
            Currently accepting 2 new clients per month. Fill out the form and receive a response within 24 hours — including a free honest assessment of your current campaigns.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="bg-cream px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <Eyebrow>Contact Details</Eyebrow>
            <H2 className="mb-2">Get in touch <em className="not-italic font-fraunces font-light text-blue">directly</em></H2>
            <p className="text-sm text-muted mb-8 leading-[1.8] max-w-[400px]">Prefer to skip the form? Reach out directly via any of the channels below and get a reply within 24 hours.</p>

            {/* Contact items */}
            <div className="flex flex-col gap-2.5 mb-10">
              {contactLinks.map((c) => {
                const Inner = (
                  <div className="flex items-center gap-3.5">
                    <div className="w-[42px] h-[42px] rounded-lg bg-blue/10 flex items-center justify-center text-lg flex-shrink-0 font-bold text-blue">{c.icon}</div>
                    <div>
                      <div className="text-[11px] font-bold text-muted2 uppercase tracking-[0.6px] mb-0.5">{c.label}</div>
                      <div className="text-sm font-semibold text-ink">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 bg-white border border-border rounded-[14px] hover:border-blue/30 hover:bg-blue-light transition-all no-underline">
                    <div className="w-[42px] h-[42px] rounded-lg bg-blue/10 flex items-center justify-center text-lg flex-shrink-0 font-bold text-blue">{c.icon}</div>
                    <div>
                      <div className="text-[11px] font-bold text-muted2 uppercase tracking-[0.6px] mb-0.5">{c.label}</div>
                      <div className="text-sm font-semibold text-ink">{c.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-3.5 p-4 bg-white border border-border rounded-[14px]">
                    <div className="w-[42px] h-[42px] rounded-lg bg-blue/10 flex items-center justify-center text-lg flex-shrink-0 font-bold text-blue">{c.icon}</div>
                    <div>
                      <div className="text-[11px] font-bold text-muted2 uppercase tracking-[0.6px] mb-0.5">{c.label}</div>
                      <div className="text-sm font-semibold text-ink">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What happens after applying */}
            <div className="bg-white border border-border rounded-[28px] p-7 mb-4">
              <div className="font-syne text-[18px] font-bold text-ink mb-1.5">What happens after you apply</div>
              <p className="text-sm text-muted mb-5 leading-[1.7]">Here is exactly what to expect after submitting the form:</p>
              <div className="flex flex-col">
                {steps.map((s, i) => (
                  <div key={s.text} className={`flex items-center gap-3 py-3 ${i < steps.length - 1 ? 'border-b border-border' : ''}`}>
                    <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center text-sm flex-shrink-0">{s.icon}</div>
                    <span className="text-[13px] text-muted font-medium">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-blue rounded-[20px] p-6 flex gap-3.5 items-start">
              <div className="text-3xl flex-shrink-0">🛡️</div>
              <div>
                <div className="font-syne text-[16px] font-bold text-white mb-1.5">The Honest Guarantee</div>
                <p className="text-[13px] text-white/70 leading-[1.7]">If after the free audit it&apos;s not believed that meaningful improvement in your results is achievable, that will be communicated clearly. No project will be taken on where results cannot be delivered.</p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div>
            <div className="bg-white border border-border rounded-[36px] p-8 md:p-11">
              <div className="font-syne font-extrabold text-ink mb-1.5 tracking-[-1px]" style={{ fontSize: 'clamp(22px,3vw,30px)' }}>Apply for a Free Audit</div>
              <p className="text-sm text-muted mb-7">Takes 2 minutes. We reply within 24 hours. No commitment required.</p>

              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-7">
                {[1,2,3].map((n, i) => (
                  <div key={n} className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold transition-all ${
                      i === 0 ? 'bg-blue border-blue text-white' : 'border-[1.5px] border-border text-muted'
                    }`}>
                      {n}
                    </div>
                    {i < 2 && <div className="flex-1 h-[2px] bg-border w-8" />}
                  </div>
                ))}
                <span className="text-[11px] font-semibold text-muted2 ml-2">Step 1 of 3</span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address *', type: 'email', placeholder: 'you@company.com' },
                    { label: 'Phone / WhatsApp', type: 'tel', placeholder: '+1 (555) 000-0000' },
                    { label: 'Company / Business Name', type: 'text', placeholder: 'Your business name' },
                  ].map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-ink2">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder}
                        className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,82,255,0.07)] font-jakarta placeholder:text-muted2" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-ink2">Website or Store URL *</label>
                  <input type="url" placeholder="https://yourstore.com"
                    className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta placeholder:text-muted2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-ink2">Monthly Ad Spend *</label>
                    <select className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta cursor-pointer">
                      <option value="" disabled>Select range</option>
                      {['Under $1,000/month','$1,000 – $3,000/month','$3,000 – $7,000/month','$7,000 – $15,000/month','$15,000 – $30,000/month','$30,000+/month'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-ink2">Primary Platform *</label>
                    <select className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta cursor-pointer">
                      <option value="" disabled>Select platform</option>
                      {['Meta Ads (Facebook/Instagram)','Google Ads','TikTok Ads','Multiple Platforms','Not running ads yet'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-ink2">Country *</label>
                    <select className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta cursor-pointer">
                      <option value="" disabled>Select country</option>
                      {['United States','United Kingdom','Australia','Canada','Germany','Netherlands','UAE','New Zealand','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-ink2">Industry</label>
                    <select className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta cursor-pointer">
                      <option value="" disabled>Select industry</option>
                      {['eCommerce / Shopify','Local Service Business','Coaching / Consulting','Real Estate','Health & Beauty','SaaS / Tech','Restaurant / Food','Agency','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-ink2">Biggest Marketing Challenge *</label>
                  <textarea placeholder="Tell me what you're currently struggling with. The more specific, the better the feedback I can provide in the audit..."
                    rows={4} className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta placeholder:text-muted2 resize-y" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-ink2">How Did You Find RS.Media?</label>
                  <select className="bg-cream border-[1.5px] border-border text-ink px-4 py-3 text-sm rounded-lg outline-none transition-all focus:border-blue focus:bg-white font-jakarta cursor-pointer">
                    <option value="" disabled>Select one</option>
                    {['Upwork','LinkedIn','Instagram','Google Search','Referral from another client','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <button type="submit"
                  className={`w-full py-4 text-[15px] font-bold rounded-[14px] border-none cursor-pointer transition-all duration-300 font-jakarta ${
                    submitted
                      ? 'bg-green text-white'
                      : 'bg-blue text-white hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-blue'
                  }`}
                  style={{ boxShadow: submitted ? '0 8px 24px rgba(0,196,140,.25)' : undefined }}>
                  {submitted ? '✓ Sent! We\'ll reply within 24 hours.' : 'Submit Application →'}
                </button>
                <p className="text-xs text-muted2 text-center">🔒 100% confidential · Free audit · No commitment</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <div className="bg-white border-t border-border px-5 md:px-[72px] py-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[['$2M+','Ad spend managed globally'],['50+','Clients served across 10+ countries'],['24hr','Maximum response time guaranteed']].map(([v,l]) => (
            <div key={v}>
              <div className="font-syne font-extrabold text-blue tracking-[-1px] leading-none mb-2" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>{v}</div>
              <div className="text-[13px] text-muted font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
