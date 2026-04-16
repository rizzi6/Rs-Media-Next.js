import Link from 'next/link';
import {
  Eyebrow, H2, BtnBlue, BtnOutline, BtnWhite,
  Marquee, NumbersStrip, CTAStrip, StatCard, Tag, TestiCard
} from '@/components/UI';

const services = [
  { icon: '📱', title: 'Meta Ads', desc: 'Full-funnel Facebook & Instagram campaigns built with the 4-Stage Testing Framework for maximum ROAS.', tags: ['Facebook','Instagram','Retargeting','UGC'] },
  { icon: '🔍', title: 'Google Ads', desc: 'Search, Shopping, Display & Performance Max capturing high-intent buyers with advanced bid management.', tags: ['Search','Shopping','PMax','Display'] },
  { icon: '🎵', title: 'TikTok Ads', desc: 'Native-style performance campaigns leveraging TikTok\'s algorithm for rapid audience acquisition.', tags: ['Spark Ads','UGC','eCommerce','Lead Gen'] },
];

const testimonials = [
  { quote: 'I have worked with three agencies before. They all told me what I wanted to hear. This was completely different — honest strategy, transparent reporting, and results that moved the needle.', name: 'James Mitchell', role: 'eCommerce Brand — UK', initials: 'JM' },
  { quote: 'Our ROAS went from 1.4x to over 4x in two months. The campaign restructure completely transformed how our business operates.', name: 'Sarah Reynolds', role: 'Shopify Store Owner — USA', initials: 'SR' },
  { quote: 'We were spending $8,000 a month getting 25 leads. Now we get 94 leads for the same budget. Complete game changer.', name: 'David Park', role: 'Home Services — Australia', initials: 'DP' },
];

export default function Home() {
  return (
    <>
      {/* ANNOUNCE */}
      <div className="bg-ink2 text-white flex items-center justify-center gap-2.5 px-5 py-3 text-[13px] font-medium flex-wrap text-center" style={{ marginTop: 68 }}>
        <span className="bg-blue text-[10px] font-extrabold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full">Live</span>
        <span>2 new client spots open for Q2 2025 —</span>
        <Link href="/contact" className="text-[#7fb8ff] font-bold inline-flex items-center gap-1 hover:text-white transition-colors no-underline after:content-['→'] after:transition-transform hover:after:translate-x-1">
          Apply for a free paid media audit
        </Link>
      </div>

      {/* HERO */}
      <section className="bg-white px-5 md:px-[72px] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-[-180px] right-[-180px] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(26,82,255,.055) 0%,transparent 70%)' }} />
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-light text-blue text-xs font-bold tracking-[0.5px] px-4 py-[7px] rounded-full mb-7 border border-blue/15">
              <span className="w-[7px] h-[7px] rounded-full bg-green pulse-dot flex-shrink-0" />
              Available for New Projects
            </div>
            <h2 className="font-syne font-extrabold leading-[1.02] tracking-[-3px] text-ink mb-6"
              style={{ fontSize: 'clamp(48px,7vw,80px)' }}>
              Solving paid<br />media challenges.<br />
              <em className="not-italic font-fraunces font-light text-blue">Scaling</em> revenue.
            </h2>
            <p className="text-muted leading-[1.85] mb-11" style={{ fontSize: 'clamp(15px,1.7vw,17px)', maxWidth: 500 }}>
              Partnering with eCommerce brands and service businesses across the USA, Australia, UK and Europe to build full-funnel paid acquisition systems — from strategy to execution to scale.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <BtnBlue href="/contact">Start a Project ↗</BtnBlue>
              <BtnOutline href="/results">View Results</BtnOutline>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted2">Trusted across:</span>
              {['eCommerce','SaaS','Real Estate','Health & Beauty','Coaching'].map((t) => (
                <span key={t} className="text-[11px] font-bold text-muted bg-gray-100 border border-border px-3 py-1 rounded-full uppercase tracking-[0.3px]">{t}</span>
              ))}
            </div>
          </div>

          {/* Hero right */}
          <div className="flex flex-col gap-3.5">
            <div className="grid grid-cols-2 gap-3.5">
              {[['$2M+','Ad Spend Managed'],['4.8x','Average ROAS'],['150+','Campaigns Launched'],['4+','Years Experience']].map(([n,l]) => (
                <StatCard key={n} num={n} label={l} />
              ))}
            </div>
            <div className="bg-ink2 rounded-[20px] px-6 py-5 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-lg bg-white/[0.07] flex items-center justify-center text-2xl flex-shrink-0">🌍</div>
              <div>
                <div className="text-xs text-white/40 font-medium mb-1">Clients served globally</div>
                <div className="font-syne text-[15px] font-bold text-white">USA · UK · Australia · Europe · UAE</div>
              </div>
            </div>
            <div className="bg-cream border border-border rounded-[14px] px-5 py-3.5 flex items-center justify-between flex-wrap gap-2">
              {['Meta Ads','Google Ads','TikTok Ads','GoHighLevel'].map((p) => (
                <div key={p} className="flex items-center gap-1.5 text-[11px] font-bold text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue" />{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      <NumbersStrip />

      {/* SERVICES PREVIEW */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
            <div>
              <Eyebrow>Services</Eyebrow>
              <H2>Strategic services for<br /><em className="not-italic font-fraunces font-light text-blue">complex</em> paid media challenges</H2>
            </div>
            <div>
              <p className="text-muted leading-[1.85] text-[15px] mb-5 max-w-[380px]">Every service engineered for one outcome — profitable, scalable growth.</p>
              <BtnOutline href="/services">View All Services →</BtnOutline>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-cream border border-border rounded-[36px] p-8 md:p-10 flex flex-col gap-4 hover:bg-white hover:border-blue/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-[14px] bg-blue/10 flex items-center justify-center text-2xl group-hover:bg-blue transition-colors duration-300">{s.icon}</div>
                <div className="font-syne text-[19px] font-bold text-ink">{s.title}</div>
                <p className="text-sm text-muted leading-[1.8] flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-cream px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Eyebrow>Client Feedback</Eyebrow>
              <H2>What clients say about<br />working <em className="not-italic font-fraunces font-light text-blue">together</em></H2>
            </div>
            <BtnOutline href="/clients">View All Testimonials →</BtnOutline>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => <TestiCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      <CTAStrip title="Ready to scale your revenue?" sub="Apply for a free paid media audit — no pitch, just honest feedback." />
    </>
  );
}
