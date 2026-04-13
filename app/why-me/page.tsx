import Link from 'next/link';
import { Eyebrow, H2, PageHero, CTAStrip, BtnWhite } from '@/components/UI';

const reasons = [
  { icon: '🎯', title: 'System Thinker, Not Just an Ad Runner', desc: 'Every campaign is part of a complete acquisition system — from first impression through retargeting, follow-up automation, and closed sale. Most media buyers manage ad sets. This engagement manages the full revenue engine.' },
  { icon: '📊', title: 'Data-Driven at Every Step', desc: 'Server-side tracking, Conversions API, and third-party attribution are set up before any spend begins. Decisions are backed by accurate data — not platform dashboards that over-report by 20–40% post-iOS 14.' },
  { icon: '💬', title: 'Transparent, Honest Communication', desc: 'Weekly reports with clear, honest analysis. If something isn\'t working, it is communicated immediately with a solution. No spin, no vanity metrics, no hiding behind platform-reported numbers.' },
  { icon: '🌍', title: 'Global Experience, Remote-First', desc: '4+ years managing campaigns for clients across 10+ countries. Fully async and timezone-flexible for USA, UK, Australia, and Europe. Same results regardless of where your business is located.' },
  { icon: '🔑', title: 'You Always Own Everything', desc: 'Ad accounts, pixels, data, creative assets, and campaign history all remain yours. No lock-in, no data hostage situations. Month-to-month contracts. The relationship continues only as long as results justify it.' },
  { icon: '⚡', title: 'Multi-Platform Under One Roof', desc: 'Meta, Google, TikTok, GoHighLevel, Shopify, and tracking — all handled without managing multiple freelancers. One person, full picture, complete accountability.' },
];

const cmpRows = [
  { feature: 'Full-funnel acquisition system', me: '✓ Always included', freelancer: '✗ Rarely', agency: 'Sometimes' },
  { feature: 'Server-side tracking setup', me: '✓ Every project', freelancer: '✗ Usually skipped', agency: 'Extra cost' },
  { feature: 'Weekly transparent reporting', me: '✓ Included', freelancer: 'Inconsistent', agency: 'Monthly only' },
  { feature: 'You own your ad accounts', me: '✓ Always', freelancer: '✓ Usually', agency: '✗ Often locked' },
  { feature: 'CRM & follow-up automation', me: '✓ GoHighLevel', freelancer: '✗ Not offered', agency: 'Extra service' },
  { feature: 'Multi-platform expertise', me: '✓ Meta+Google+TikTok', freelancer: '✗ Usually 1 platform', agency: 'Multiple teams' },
  { feature: 'Creative strategy guidance', me: '✓ 4-Stage framework', freelancer: 'Basic A/B only', agency: 'Structured' },
  { feature: 'Response time', me: '✓ Within 24 hours', freelancer: 'Variable', agency: '✗ Often slow' },
  { feature: 'Month-to-month contracts', me: '✓ Always', freelancer: '✓ Usually', agency: '✗ 6–12 month lock-in' },
];

export default function WhyMePage() {
  return (
    <>
      <PageHero
        breadcrumb="Why Me"
        eyebrow="Why Choose Me"
        title={<>Not just an ad manager.<br />A <em className="not-italic font-fraunces font-light text-blue">growth partner.</em></>}
        desc="There are thousands of media buyers. Here is exactly what makes this engagement different — and why businesses across the USA, UK, Australia, and Europe keep coming back."
      />

      {/* STATS */}
      <div className="bg-ink py-10 md:py-16 px-5 md:px-[72px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06]">
          {[['4+','Years managing paid campaigns'],['10+','Countries served globally'],['24hr','Maximum response time'],['100%','Client data ownership']].map(([v,l]) => (
            <div key={v} className="bg-ink px-5 md:px-10 py-7 md:py-12 hover:bg-ink2 transition-colors">
              <div className="font-syne font-extrabold text-white leading-none mb-2 tracking-[-2px]" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>{v}</div>
              <div className="text-[13px] text-white/45 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY LIST */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>The Difference</Eyebrow>
            <H2 className="mb-10">What sets this apart<br />from <em className="not-italic font-fraunces font-light text-blue">everyone else</em></H2>
            <div className="flex flex-col gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 p-5 md:p-6 bg-cream border border-border rounded-[20px] hover:border-blue/20 hover:translate-x-1.5 hover:shadow-sm transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-blue/10 flex items-center justify-center text-xl flex-shrink-0">{r.icon}</div>
                  <div>
                    <div className="font-syne text-[16px] font-bold text-ink mb-1.5">{r.title}</div>
                    <p className="text-[13px] text-muted leading-[1.7]">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            {/* Dark stats card */}
            <div className="bg-ink2 rounded-[36px] p-8 md:p-11">
              <Eyebrow light>The Numbers</Eyebrow>
              <div className="font-syne font-extrabold text-white leading-[1.1] tracking-[-1px] mb-3" style={{ fontSize: 'clamp(26px,3.5vw,38px)' }}>
                Results that <em className="not-italic font-fraunces font-light text-[#7fb8ff]">compound</em> over time
              </div>
              <p className="text-sm text-white/45 leading-[1.8] mb-7">Unlike agencies that churn accounts, every engagement is built for long-term performance — not short-term vanity wins.</p>
              <div className="grid grid-cols-2 gap-3">
                {[['-67%','Average CPL Reduction'],['3.2x','Avg Revenue Increase'],['24hr','Response Time Max'],['100%','Transparent Reporting']].map(([v,l]) => (
                  <div key={l} className="bg-white/[0.05] rounded-[14px] p-5 border border-white/[0.07]">
                    <div className="font-syne font-extrabold text-blue tracking-[-1px] leading-none mb-1.5 text-[32px]">{v}</div>
                    <div className="text-[11px] text-white/40 font-semibold">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-blue rounded-[28px] p-7 md:p-9 flex items-center justify-between gap-5 flex-wrap">
              <div>
                <div className="font-syne font-bold text-white text-xl leading-tight">Ready to see real results?</div>
                <div className="text-sm text-white/60 mt-1">Free audit · No commitment required</div>
              </div>
              <BtnWhite href="/contact">Apply Now →</BtnWhite>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-cream px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Eyebrow>The Comparison</Eyebrow>
              <H2>RS.Media vs the <em className="not-italic font-fraunces font-light text-blue">alternatives</em></H2>
            </div>
            <p className="text-muted text-[15px] leading-[1.85] max-w-[360px]">An honest side-by-side comparison of what you actually get across different options.</p>
          </div>
          <div className="overflow-x-auto rounded-[20px] border border-border">
            <table className="w-full border-collapse min-w-[540px]">
              <thead>
                <tr>
                  <th className="bg-cream text-muted font-syne text-sm font-extrabold text-left px-6 md:px-8 py-5"></th>
                  <th className="bg-blue text-white font-syne text-sm font-extrabold text-left px-6 md:px-8 py-5 tracking-[-0.2px]">RS.Media ✓</th>
                  <th className="bg-ink2 text-white/70 font-syne text-sm font-extrabold text-left px-6 md:px-8 py-5">Generic Freelancer</th>
                  <th className="bg-ink2 text-white/70 font-syne text-sm font-extrabold text-left px-6 md:px-8 py-5">Large Agency</th>
                </tr>
              </thead>
              <tbody>
                {cmpRows.map((r, i) => (
                  <tr key={r.feature} className={i < cmpRows.length - 1 ? 'border-b border-border' : ''}>
                    <td className="bg-cream text-ink font-semibold text-[13px] px-6 md:px-8 py-4">{r.feature}</td>
                    <td className="bg-blue/[0.04] text-blue font-bold text-sm px-6 md:px-8 py-4">{r.me}</td>
                    <td className="bg-cream text-muted2 text-sm px-6 md:px-8 py-4">{r.freelancer}</td>
                    <td className="bg-cream text-muted2 text-sm px-6 md:px-8 py-4">{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTAStrip title="The proof is in the results." sub="Apply for a free audit and see exactly what a real growth partner looks like." />
    </>
  );
}
