import { Eyebrow, H2, PageHero, CTAStrip } from '@/components/UI';

const steps = [
  {
    num: '01', week: 'Week 0', title: 'Discovery Call & Application',
    desc: 'After you apply, a 30-minute discovery call is scheduled. This is used to understand your business, your offer, your current marketing situation, and whether there is a genuine opportunity to improve results. If it is not a good fit, that is communicated clearly on the call.',
    tags: ['30-Min Discovery Call','Business Analysis','Fit Assessment','Clear Expectations'],
  },
  {
    num: '02', week: 'Week 1', title: 'Full Audit & Strategy Document',
    desc: 'A complete audit of your existing ad accounts, tracking setup, landing pages, creative assets, and audience structure is performed. A written strategy document is delivered that identifies every gap and the exact roadmap. Not a vague overview — a specific, actionable plan.',
    tags: ['Account Audit','Tracking Review','Competitor Analysis','Strategy Document'],
  },
  {
    num: '03', week: 'Week 1–2', title: 'Tracking Foundation & Setup',
    desc: 'Before a single ad goes live, the tracking foundation is built correctly. Meta Conversions API, Google Tag Manager, GA4, and any third-party attribution tools are configured and tested. Most campaigns lose 20–40% of their conversion data — this step ensures every decision is data-accurate from day one.',
    tags: ['Meta CAPI','Google Tag Manager','GA4 Setup','Attribution Tool'],
  },
  {
    num: '04', week: 'Week 2–4', title: 'Campaign Launch & 4-Stage Testing',
    desc: 'Campaigns launch using the 4-Stage Testing Framework — testing messaging angles first, then creative formats, then audience segments, then scaling. Each stage is tested in the correct order to maximize learning speed and minimize wasted spend. No random creative testing without a clear hypothesis.',
    tags: ['Messaging Testing','Creative Testing','Audience Layers','CBO Structure'],
  },
  {
    num: '05', week: 'Ongoing', title: 'Scale, Report & Refine',
    desc: 'Once winning combinations are identified, budgets are scaled with 20% increases every 48–72 hours. Underperformers are cut decisively. Weekly performance reports are sent with completely honest analysis — every metric tied back to actual business revenue, not vanity numbers or platform-reported ROAS in isolation.',
    tags: ['20% Budget Scaling','Weekly Reports','MER Tracking','Monthly Review Call'],
  },
];

const included = [
  { icon: '📋', title: 'Full Strategy Document', desc: 'A written audit and strategy document delivered in week one. Identifies every gap and the exact roadmap for the engagement.' },
  { icon: '🔧', title: 'Complete Tracking Setup', desc: 'Server-side tracking, Conversions API, GA4, and attribution tools configured before any spend begins.' },
  { icon: '🎨', title: 'Creative Strategy Guidance', desc: 'Ad copy frameworks, creative briefs, and UGC direction to help produce winning creatives for every campaign stage.' },
  { icon: '📊', title: 'Weekly Performance Reports', desc: 'Detailed weekly reports with honest analysis, every metric tied to actual revenue, and a clear action plan for the week ahead.' },
  { icon: '📞', title: 'Monthly Strategy Call', desc: 'A monthly video call to review performance, align on goals, and plan the next month\'s strategy together.' },
  { icon: '🔑', title: 'You Always Own the Account', desc: 'All ad accounts, pixels, data, and creative assets remain yours. Access is never locked — non-negotiable in every engagement.' },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        breadcrumb="Process"
        eyebrow="How It Works"
        title={<>A structured process<br />built to <em className="not-italic font-fraunces font-light text-blue">eliminate guesswork</em></>}
        desc="Every engagement follows the same rigorous 5-step system. No shortcuts, no assumptions — just a proven framework that consistently delivers results for businesses across the USA, UK, Australia, and Europe."
      />

      {/* STATS */}
      <div className="bg-ink py-10 md:py-16 px-5 md:px-[72px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06]">
          {[['5-Step','Proven system every project'],['48h','Budget scale intervals (max)'],['20%','Max budget increase at once'],['24hr','Max response time guaranteed']].map(([v,l]) => (
            <div key={v} className="bg-ink px-5 md:px-10 py-7 md:py-12 hover:bg-ink2 transition-colors">
              <div className="font-syne font-extrabold text-white leading-none mb-2 tracking-[-2px]" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>{v}</div>
              <div className="text-[13px] text-white/45 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS STEPS */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Eyebrow>Step by Step</Eyebrow>
              <H2>From first conversation<br />to <em className="not-italic font-fraunces font-light text-blue">scaling results</em></H2>
            </div>
            <p className="text-muted text-[15px] leading-[1.85] max-w-[360px]">Here is exactly what happens from the moment you apply to the moment your campaigns are scaling profitably.</p>
          </div>

          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={s.num}
                className={`proc-row grid gap-4 md:gap-10 items-start py-8 md:py-10 ${i < steps.length - 1 ? 'border-b border-border' : ''}`}
                style={{ gridTemplateColumns: 'clamp(48px,4vw,64px) 1fr auto' }}
              >
                <div className="proc-num w-12 h-12 rounded-full border-[1.5px] border-border bg-white flex items-center justify-center font-syne text-[13px] font-extrabold text-muted flex-shrink-0">
                  {s.num}
                </div>
                <div>
                  <div className="font-syne font-bold text-ink mb-2.5 tracking-[-0.3px]" style={{ fontSize: 'clamp(17px,2.2vw,22px)' }}>{s.title}</div>
                  <p className="text-sm text-muted leading-[1.8] mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[11px] font-semibold text-muted border border-border px-3 py-[5px] rounded-lg bg-cream">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="text-[11px] font-bold text-muted border border-border px-3 py-[5px] rounded-lg bg-cream whitespace-nowrap">{s.week}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-cream px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Eyebrow>What&apos;s Included</Eyebrow>
              <H2>Everything included<br />in every <em className="not-italic font-fraunces font-light text-blue">engagement</em></H2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-[36px] p-8 hover:border-blue/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-[14px] bg-blue/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-blue transition-colors duration-300">{item.icon}</div>
                <div className="font-syne text-[17px] font-bold text-ink mb-2.5">{item.title}</div>
                <p className="text-sm text-muted leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="Ready to start the process?" sub="Apply in 2 minutes. Free audit call with no commitment required." />
    </>
  );
}
