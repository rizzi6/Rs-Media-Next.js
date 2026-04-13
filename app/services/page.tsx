import { Eyebrow, H2, PageHero, CTAStrip, Tag } from '@/components/UI';

const services = [
  { icon: '📱', title: 'Meta Ads Management', tags: ['Facebook','Instagram','Retargeting','UGC'],
    desc: 'Full-funnel Facebook and Instagram campaigns built with the 4-Stage Testing Framework — messaging, creative, audience, and scale — for maximum ROAS.',
    bullets: ['Campaign strategy and full account setup','4-Stage creative and audience testing','Lookalike and retargeting audience engineering','Weekly ROAS and CPL reporting'] },
  { icon: '🔍', title: 'Google Ads Management', tags: ['Search','Shopping','PMax','Display'],
    desc: 'Search, Shopping, Display, and Performance Max campaigns capturing high-intent buyers. Advanced negative keyword strategy and smart bidding included.',
    bullets: ['Search, Shopping, Display & PMax','200+ negative keyword list before launch','Bid strategy optimization by hour/day','Call tracking and form conversion setup'] },
  { icon: '🎵', title: 'TikTok Ads', tags: ['Spark Ads','UGC','eCommerce','Lead Gen'],
    desc: 'Native-style performance campaigns leveraging TikTok\'s powerful algorithm for rapid acquisition. UGC creative strategy, Spark Ads, and audience engineering.',
    bullets: ['Spark Ads and paid creative strategy','UGC hook testing framework','Broad audience + algorithm optimization','TikTok Pixel and event tracking'] },
  { icon: '⚡', title: 'GoHighLevel & CRM', tags: ['CRM','Funnels','SMS/Email','Pipelines'],
    desc: 'Complete CRM setup, funnel building, and automated lead nurturing. Instant SMS and email follow-ups the moment a lead comes in.',
    bullets: ['Full GHL account setup and configuration','Sales funnel and landing page builds','Automated SMS/email follow-up sequences','Pipeline management and CRM workflows'] },
  { icon: '🛒', title: 'eCommerce Growth', tags: ['Shopify','CRO','ROAS','Dynamic Ads'],
    desc: 'Shopify store optimization, product page CRO, dynamic retargeting setup, and multi-platform paid strategies built for eCommerce brands.',
    bullets: ['Shopify store and product page CRO','Dynamic product and catalog ads','Cart abandonment retargeting','ROAS and MER optimization framework'] },
  { icon: '📊', title: 'Tracking & Attribution', tags: ['GA4','GTM','CAPI','Triple Whale'],
    desc: 'Server-side tracking, Conversions API, GA4, and third-party attribution for accurate data across every touchpoint. Most campaigns lose 20–40% of conversion data — this fixes it.',
    bullets: ['Meta Conversions API (server-side)','Google Tag Manager and GA4 setup','Triple Whale or Northbeam integration','Weekly attribution and MER dashboards'] },
];

const platforms = [
  { emoji: '📘', name: 'Meta Ads', sub: 'Facebook & Instagram' },
  { emoji: '🔍', name: 'Google Ads', sub: 'Search, Shopping & PMax' },
  { emoji: '🎵', name: 'TikTok Ads', sub: 'Performance & Spark' },
  { emoji: '⚡', name: 'GoHighLevel', sub: 'CRM & Automation' },
  { emoji: '🐋', name: 'Triple Whale', sub: 'Attribution Analytics' },
  { emoji: '🛒', name: 'Shopify', sub: 'eCommerce Platform' },
  { emoji: '🌐', name: 'WordPress', sub: 'Web & Landing Pages' },
  { emoji: '📊', name: 'Google Analytics 4', sub: 'Data & Reporting' },
  { emoji: '🏷️', name: 'Google Tag Manager', sub: 'Tracking & Events' },
  { emoji: '📍', name: 'Google My Business', sub: 'Local SEO' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What I Do"
        title={<>Strategic services<br />for <em className="not-italic font-fraunces font-light text-blue">serious</em> brands</>}
        desc="Every service is engineered around one outcome — profitable, predictable, and scalable growth. No fluff. No vanity metrics. Just results."
      />

      {/* SERVICES GRID */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="bg-cream border border-border rounded-[36px] p-8 md:p-10 flex flex-col gap-4 hover:bg-white hover:border-blue/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-[14px] bg-blue/10 flex items-center justify-center text-2xl group-hover:bg-blue transition-colors duration-300">{s.icon}</div>
              <div className="font-syne text-[20px] font-bold text-ink">{s.title}</div>
              <p className="text-sm text-muted leading-[1.8]">{s.desc}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-muted">
                    <span className="text-green font-bold flex-shrink-0 mt-0.5">✓</span>{b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-ink2 px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16">
            <Eyebrow light>Technology Stack</Eyebrow>
            <H2 white>Tools behind every<br /><em className="not-italic font-fraunces font-light text-[#7fb8ff]">winning campaign</em></H2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white/[0.04] border border-white/[0.07] rounded-[20px] py-7 px-4 text-center hover:bg-blue/20 hover:border-blue/35 hover:-translate-y-1.5 transition-all duration-300">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <div className="font-syne text-[13px] font-bold text-white mb-1">{p.name}</div>
                <div className="text-[11px] text-white/40 font-medium">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="Not sure which service you need?" sub="Apply for a free audit and get a clear recommendation within 24 hours." />
    </>
  );
}
