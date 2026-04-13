'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eyebrow, H2, BtnBlue } from '@/components/UI';

const faqs = [
  {
    section: 'Working Together',
    items: [
      { q: 'What is the minimum ad budget to work together?', a: 'For best results, a minimum ad spend of $3,000 per month is recommended. This allows enough data for proper testing and optimization. Businesses with smaller budgets may benefit from starting with a single platform campaign and a focused offer.' },
      { q: 'How quickly will I see results?', a: 'Most clients see meaningful improvement within 3 to 6 weeks once tracking and campaign structure are in place. Full optimization typically takes 60 to 90 days as the algorithm gathers conversion data. Campaigns with existing data often improve faster.' },
      { q: 'What contract length is required?', a: 'All engagements are month-to-month. There are no long-term lock-in contracts. The relationship continues only as long as the results justify it — for both parties. Most clients stay long-term because of the results, not because they are contractually obligated to.' },
      { q: 'Do you work with businesses outside Pakistan?', a: 'Yes — the majority of clients are in the USA, UK, Australia, Canada, and Europe. All work is done remotely with async communication. Weekly video calls are available, and timezone flexibility means USA, UK, and Australian business hours are all accommodated.' },
      { q: 'How many clients do you work with at once?', a: 'A maximum of 8–10 clients are taken on at any time to maintain quality and attention. New client intake is typically capped at 2 per month. This ensures every client gets direct, focused attention — not a junior team member managing their account.' },
    ],
  },
  {
    section: 'Platforms & Services',
    items: [
      { q: 'What platforms do you manage?', a: 'Meta Ads (Facebook and Instagram), Google Ads (Search, Shopping, Display, Performance Max), TikTok Ads, and GoHighLevel for CRM and automation. Multi-platform management is available for brands wanting full omnichannel coverage under one roof.' },
      { q: 'Do you do creative production?', a: 'Creative strategy, scripting, UGC briefs, and ad copy are provided. Video and image production are not done in-house, but detailed creative briefs and direction are given to your team or any UGC creator. Most clients produce creatives based on the strategy provided.' },
      { q: 'Can you build my Shopify store or WordPress website?', a: 'Yes — Shopify store setup, product page optimization, and WordPress landing page development are all offered as part of the eCommerce growth service or as standalone projects. GoHighLevel funnel pages can also be built as part of the CRM setup.' },
    ],
  },
  {
    section: 'Data & Ownership',
    items: [
      { q: 'Who owns the ad accounts and data?', a: 'You always own everything — ad accounts, pixels, creative assets, and campaign history. Access is never locked or held. This is non-negotiable in every engagement regardless of contract length or circumstances.' },
      { q: 'How do you handle tracking and attribution?', a: 'Server-side tracking (Meta Conversions API, Google Enhanced Conversions), Google Tag Manager, GA4, and a third-party attribution tool (Triple Whale or Northbeam for eCommerce) are set up before any spend begins. Weekly reports compare platform data against actual backend revenue.' },
      { q: 'What reporting do I receive?', a: 'Weekly performance reports are sent every Monday covering spend, ROAS, CPL or CPA, MER, creative performance, audience insights, and the action plan for the coming week. A monthly strategy call is included in all ongoing engagements.' },
    ],
  },
  {
    section: 'Pricing & Investment',
    items: [
      { q: 'What does it cost to work together?', a: 'Pricing is based on scope, number of platforms, and ad spend level. A management fee is charged separately from the ad spend — the ad budget goes directly to the platforms, not through this service. Exact pricing is provided after the discovery call once the scope is understood.' },
      { q: 'Is there a setup fee?', a: 'A one-time onboarding fee covers the audit, strategy document, complete tracking setup, and campaign buildout. Ongoing monthly management is charged separately. This ensures the foundation is built properly before any spend begins.' },
      { q: 'What does the free audit include?', a: 'The free audit includes a full review of your current campaigns, tracking setup, landing pages, audience structure, and creative strategy. A written summary of findings and priority recommendations is delivered within 48 hours — no pitch, no obligation, just honest feedback.' },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="font-syne font-bold text-ink tracking-[-0.2px] group-hover:text-blue transition-colors"
          style={{ fontSize: 'clamp(14px,1.6vw,16px)' }}>
          {q}
        </span>
        <div className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center text-lg text-muted flex-shrink-0 transition-all duration-300 font-light ${
          open ? 'bg-blue border-blue text-white rotate-45' : 'border-border'
        }`}>
          +
        </div>
      </button>
      <div className={`text-sm text-muted leading-[1.8] overflow-hidden transition-all duration-400 ${open ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
        {a}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="bg-white px-5 md:px-[72px] pt-[130px] pb-[100px] border-b border-border relative overflow-hidden" style={{ marginTop: 0 }}>
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(26,82,255,.055) 0%,transparent 70%)' }} />
        <div className="max-w-[800px] relative">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted2 mb-6">
            <Link href="/" className="text-muted2 hover:text-blue transition-colors no-underline">Home</Link>
            <span>/</span><span className="text-ink">FAQ</span>
          </div>
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="font-syne font-extrabold leading-[1.02] tracking-[-3px] text-ink mb-6"
            style={{ fontSize: 'clamp(44px,6.5vw,88px)' }}>
            Common questions<br />answered <em className="not-italic font-fraunces font-light text-blue">honestly</em>
          </h1>
          <p className="text-muted leading-[1.85]" style={{ fontSize: 'clamp(15px,1.7vw,17px)', maxWidth: 600 }}>
            Everything you need to know before working together — answered honestly and completely. If a question is not covered here, send a message and get a direct answer within 24 hours.
          </p>
        </div>
      </div>

      {/* FAQ CONTENT */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — FAQ SECTIONS */}
          <div className="flex flex-col gap-12">
            {faqs.map((section) => (
              <div key={section.section}>
                <Eyebrow>{section.section}</Eyebrow>
                <div>
                  {section.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — CTA CARD */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            {/* Blue CTA card */}
            <div className="rounded-[36px] p-8 md:p-11 text-white"
              style={{ background: 'linear-gradient(135deg,#1a52ff 0%,#4f7cff 100%)' }}>
              <Eyebrow><span className="text-white/60">Limited Spots</span></Eyebrow>
              <div className="font-syne font-extrabold leading-[1.1] tracking-[-1px] mb-3" style={{ fontSize: 'clamp(24px,3vw,34px)' }}>
                Only 2 client spots<br />available this month
              </div>
              <p className="text-sm text-white/65 leading-[1.8] mb-6">
                Apply now to secure your spot. New client intake is capped at 2 per month to maintain quality and results for every client.
              </p>
              <div className="flex flex-col gap-2.5 mb-7">
                {['Free paid media audit call','Full account and tracking review','Written strategy recommendations','No lock-in contracts — month-to-month'].map((p) => (
                  <div key={p} className="flex items-center gap-2.5 text-[13px] text-white/80">
                    <div className="w-[22px] h-[22px] rounded-full bg-white/15 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0">✓</div>
                    {p}
                  </div>
                ))}
              </div>
              <Link href="/contact"
                className="flex justify-center w-full bg-white text-blue font-bold text-sm py-3.5 rounded-full hover:bg-ink hover:text-white transition-all duration-200 no-underline">
                Apply for Free Audit →
              </Link>
            </div>

            {/* Contact options */}
            <div className="bg-cream border border-border rounded-[28px] p-7">
              <div className="font-syne text-[18px] font-bold text-ink mb-2">Still have questions?</div>
              <p className="text-sm text-muted mb-5 leading-[1.7]">Get a clear, honest answer within 24 hours. No sales pitch — just a straight answer.</p>
              <div className="flex flex-col gap-2.5">
                <BtnBlue href="/contact" className="justify-center">Send a Message →</BtnBlue>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white py-3.5 rounded-full no-underline transition-all hover:opacity-90"
                  style={{ background: '#25d366' }}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="bg-blue px-5 md:px-[72px] py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-syne font-extrabold text-white tracking-[-1px] leading-[1.1]" style={{ fontSize: 'clamp(24px,3.5vw,40px)' }}>
            Ready to get started?
          </div>
          <div className="text-[15px] text-white/65 mt-2">Apply in 2 minutes. Free audit. No commitment.</div>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue font-bold text-sm px-7 py-3.5 rounded-full hover:bg-ink hover:text-white transition-all flex-shrink-0 no-underline">
          Apply for Free Audit →
        </Link>
      </div>
    </>
  );
}
