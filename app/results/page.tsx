import { Eyebrow, H2, PageHero, CTAStrip, Badge, NumbersStrip } from '@/components/UI';

const cases = [
  { badge: '✦ eCommerce Win', badgeVariant: 'green' as const, location: '📍 USA — Shopify Brand',
    title: 'From 1.4x to 4.1x ROAS in 60 Days',
    desc: 'A US-based Shopify brand was spending $15,000/month with a 1.4x ROAS. No audience segmentation, broken tracking, and one generic creative for all traffic temperatures.',
    steps: ['Rebuilt campaign structure into cold, warm, and hot segments','Installed Meta Conversions API and Triple Whale for accurate attribution','Launched audience-specific creatives — testimonials for warm, urgency for hot','Built full retargeting for video viewers and cart abandoners'],
    metrics: [['4.1x','ROAS Achieved'],['-58%','Cost Per Purchase'],['$87K','Extra Monthly Revenue']] },
  { badge: '✦ Lead Gen Win', badgeVariant: 'blue' as const, location: '📍 UK — Service Business',
    title: 'CPL Dropped from £45 to £9 in 3 Weeks',
    desc: 'A UK service business was running Facebook Ads with a £45 cost per lead — 3x over their target. Generic ads, stock images, and traffic sent to the homepage.',
    steps: ['Rewrote all ad copy to focus directly on customer pain points','Replaced stock images with UGC-style authentic creatives','Switched from broad interests to custom lookalike audiences','Built a dedicated landing page with message match to the ad'],
    metrics: [['£9','Cost Per Lead'],['-80%','CPL Reduction'],['3 Wks','Time to Results']] },
  { badge: '✦ Google Ads Win', badgeVariant: 'green' as const, location: '📍 Australia — Home Services',
    title: '$320 to $67 AUD Cost Per Lead',
    desc: 'An Australian home services company was spending $8,000 AUD/month on Google Ads with a $320 CPL. Broad match keywords and zero call tracking were draining the budget.',
    steps: ['Separated each service into dedicated campaigns with specific ad groups','Added 180+ negative keywords before relaunch','Built service-specific landing pages with click-to-call tracking','Added Google Display retargeting for website visitors'],
    metrics: [['$67','AUD CPL'],['94','Leads/Month'],['+40%','Close Rate Lift']] },
  { badge: '✦ Local Business Win', badgeVariant: 'green' as const, location: '📍 UAE — Restaurant',
    title: '3x Online Orders on the Same Budget',
    desc: 'A UAE restaurant was running Meta Ads with zero online orders. Wrong objective, no pixel, and traffic to homepage.',
    steps: ['Switched to Conversions campaign with correct Meta Pixel tracking','Built a direct-order landing page with menu and clear CTA','Created warm retargeting audiences from website visitors','Added a limited-time offer to create urgency in the creative'],
    metrics: [['3x','Online Orders'],['Same','Budget Used'],['30','Days to Results']] },
  { badge: '✦ TikTok Ads Win', badgeVariant: 'blue' as const, location: '📍 Australia — DTC Brand',
    title: 'TikTok Becomes #1 Acquisition Channel in 6 Weeks',
    desc: 'A DTC brand had never tested TikTok Ads. Within 6 weeks, TikTok became their lowest CPA channel — outperforming 2 years of Meta Ads history.',
    steps: ['Developed UGC hook testing framework with 5 different creative angles','Launched broad targeting and let TikTok\'s algorithm learn','Refreshed top-performing creatives weekly to prevent fatigue','Scaled budget 20% every 3 days on winning ad groups'],
    metrics: [['#1','Acquisition Channel'],['-42%','CPA vs Meta'],['6 Wks','Time to Scale']] },
  { badge: '✦ Automation Win', badgeVariant: 'amber' as const, location: '📍 Canada — Coaching Business',
    title: 'Close Rate Up 40% With GoHighLevel Automation',
    desc: 'A Canadian coaching business was generating leads from Meta Ads but losing 70% because follow-up was manual and the average response time was 6+ hours.',
    steps: ['Built instant SMS follow-up triggering within 90 seconds of form submission','Created 7-day automated email and SMS nurture sequence','Set up automated calendar booking directly in GHL pipeline','Integrated with Meta Lead Forms for zero-friction lead capture'],
    metrics: [['+40%','Close Rate'],['90s','Lead Response'],['−20h','Admin/Wk Saved']] },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Results"
        eyebrow="Proven Results"
        title={<>Real numbers.<br /><em className="not-italic font-fraunces font-light text-blue">Real growth.</em></>}
        desc="Every result below was achieved through systematic strategy, accurate tracking, and disciplined execution — not guesswork or luck."
      />

      {/* STATS STRIP */}
      <div className="bg-ink py-10 md:py-16 px-5 md:px-[72px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06]">
          {[['$2M+','Total ad spend managed'],['-67%','Average CPL reduction'],['4.8x','Average ROAS delivered'],['3.2x','Average revenue increase']].map(([v,l]) => (
            <div key={v} className="bg-ink px-5 md:px-10 py-7 md:py-12 hover:bg-ink2 transition-colors">
              <div className="font-syne font-extrabold text-white leading-none mb-2 tracking-[-2px]" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>{v}</div>
              <div className="text-[13px] text-white/45 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDIES */}
      <section className="bg-cream px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-14">
            <Eyebrow>Case Studies</Eyebrow>
            <H2>Campaign results across<br /><em className="not-italic font-fraunces font-light text-blue">every major market</em></H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((c) => (
              <div key={c.title} className="bg-white border border-border rounded-[36px] p-8 md:p-10 relative overflow-hidden hover:bg-cream hover:-translate-y-1 hover:shadow-lg hover:border-blue/15 transition-all duration-300 card-top-bar">
                <div className="flex justify-between items-start gap-2.5 mb-4 flex-wrap">
                  <Badge variant={c.badgeVariant}>{c.badge}</Badge>
                  <span className="text-[12px] font-medium text-muted">{c.location}</span>
                </div>
                <h3 className="font-syne font-bold text-ink leading-[1.2] mb-3 tracking-[-0.5px]" style={{ fontSize: 'clamp(18px,2.4vw,24px)' }}>{c.title}</h3>
                <p className="text-sm text-muted leading-[1.8] mb-6">{c.desc}</p>
                <ul className="flex flex-col gap-2 mb-7">
                  {c.steps.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="text-green font-bold flex-shrink-0 mt-0.5">✓</span>{s}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 md:gap-8 pt-6 border-t border-border flex-wrap">
                  {c.metrics.map(([v, l]) => (
                    <div key={l}>
                      <div className="font-syne font-extrabold text-blue tracking-[-1px] leading-none" style={{ fontSize: 'clamp(22px,2.8vw,34px)' }}>{v}</div>
                      <div className="text-[11px] font-semibold text-muted2 mt-1.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="Want results like these?" sub="Apply for a free audit — see exactly what can be improved in your campaigns." />
    </>
  );
}
