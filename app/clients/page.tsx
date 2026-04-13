import { Eyebrow, H2, PageHero, CTAStrip, TestiCard } from '@/components/UI';

const industries = [
  { icon: '🛒', title: 'eCommerce', desc: 'Shopify brands, DTC products, online retail' },
  { icon: '🏠', title: 'Home Services', desc: 'HVAC, plumbing, cleaning, renovation' },
  { icon: '🏥', title: 'Health & Beauty', desc: 'Med spas, salons, wellness brands' },
  { icon: '🎓', title: 'Coaching & Education', desc: 'Online courses, coaches, consultants' },
  { icon: '🏡', title: 'Real Estate', desc: 'Agents, developers, property investors' },
  { icon: '🍽️', title: 'Restaurants & Food', desc: 'Restaurants, cafes, food delivery brands' },
  { icon: '💻', title: 'SaaS & Tech', desc: 'Software, apps, B2B technology' },
  { icon: '⚖️', title: 'Professional Services', desc: 'Law firms, finance, agencies, B2B' },
];

const testimonials = [
  { quote: 'I have worked with three agencies before. They all told me what I wanted to hear. This was completely different — honest strategy, transparent reporting, and results that actually moved the needle.', name: 'James Mitchell', role: 'eCommerce Brand — UK', initials: 'JM' },
  { quote: 'Our ROAS went from 1.4x to over 4x in two months. The campaign restructure completely transformed how our business operates. Every dollar we spent came back multiplied.', name: 'Sarah Reynolds', role: 'Shopify Store Owner — USA', initials: 'SR' },
  { quote: 'We were spending $8,000 a month getting 25 leads. Now we get 94 leads for the same budget. The Google Ads restructure was a complete game changer for our home services business.', name: 'David Park', role: 'Home Services — Australia', initials: 'DP' },
  { quote: 'The GoHighLevel automation setup alone saved us 20 hours a week. Leads that used to go cold are now being nurtured automatically. Our close rate went up 40% with no extra ad spend.', name: 'Laura Kim', role: 'Coaching Business — Canada', initials: 'LK' },
  { quote: 'Finally a media buyer who understands both the creative AND the data side. Our TikTok campaigns went from zero to our best-performing channel in just 6 weeks. Absolutely recommend.', name: "Marcus O'Brien", role: 'DTC Brand — Australia', initials: 'MO' },
  { quote: 'I never thought I would find someone this reliable working remotely. Weekly reports are detailed, honest, and genuinely useful. Outstanding work from start to finish.', name: 'Thomas Weber', role: 'eCommerce Brand — Germany', initials: 'TW' },
  { quote: 'Our restaurant went from zero online orders to tripling them in 30 days on the exact same budget. The strategy was clear, the execution was fast, and the results were undeniable.', name: 'Ahmed Khalid', role: 'Restaurant Owner — UAE', initials: 'AK' },
  { quote: 'Worked with several media buyers in the past. Nobody has combined the paid ads expertise with the full funnel system the way this was done. Genuinely impressed with every aspect.', name: 'Rachel Nguyen', role: 'Health & Beauty Brand — USA', initials: 'RN' },
  { quote: 'The tracking setup alone was worth the entire engagement. We finally had accurate data and made decisions that actually improved results. Can\'t recommend enough.', name: 'Ben Morris', role: 'SaaS Company — UK', initials: 'BM' },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Clients"
        eyebrow="Client Feedback"
        title={<>Built on strong and<br /><em className="not-italic font-fraunces font-light text-blue">lasting relationships</em></>}
        desc="Transparency, collaboration, and a deep understanding of client needs. A true strategic partner — not just a vendor. Here is what clients across the USA, UK, Australia, and Europe say."
      />

      {/* STATS */}
      <div className="bg-ink py-10 md:py-16 px-5 md:px-[72px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06]">
          {[['50+','Clients served globally'],['10+','Countries represented'],['5★','Average Upwork rating'],['94%','Client retention rate']].map(([v,l]) => (
            <div key={v} className="bg-ink px-5 md:px-10 py-7 md:py-12 hover:bg-ink2 transition-colors">
              <div className="font-syne font-extrabold text-white leading-none mb-2 tracking-[-2px]" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>{v}</div>
              <div className="text-[13px] text-white/45 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Eyebrow>Industries Served</Eyebrow>
              <H2>Trusted across <em className="not-italic font-fraunces font-light text-blue">every major</em><br />business category</H2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-cream border border-border rounded-[28px] p-6 md:p-7 text-center hover:border-blue/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-3.5">{ind.icon}</div>
                <div className="font-syne text-[16px] font-bold text-ink mb-1.5">{ind.title}</div>
                <p className="text-[13px] text-muted">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Eyebrow>Testimonials</Eyebrow>
              <H2>What clients say<br />about working <em className="not-italic font-fraunces font-light text-blue">together</em></H2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <TestiCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="Join businesses growing with RS.Media." sub="Apply for a free audit and see what's possible for your business." />
    </>
  );
}
