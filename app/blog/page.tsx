import { Eyebrow, H2, PageHero, CTAStrip, Badge, BtnBlue } from '@/components/UI';

const featured = {
  emoji: '📊',
  category: 'Meta Ads',
  title: 'Why Your Meta Ad Data Is Lying to You (And How to Fix It)',
  excerpt: 'Post-iOS 14, platform-reported ROAS is systematically overstated. Most brands are scaling losing campaigns because their Meta dashboard shows a 3x ROAS while their actual MER is 1.4x. Here is the complete server-side tracking setup that fixes this.',
  date: 'April 8, 2025',
  read: '8 min read',
};

const posts = [
  { emoji: '🎯', category: 'Meta Ads', gradient: 'from-blue-light to-cream',
    title: 'The 4-Stage Testing Framework That Separates Average Media Buyers From Advanced Ones',
    excerpt: 'Most media buyers test creatives. Advanced media buyers test the entire acquisition system. Here is the exact sequence that cuts cost per result by 30–50%.',
    date: 'March 22, 2025', read: '6 min read' },
  { emoji: '📈', category: 'Google Ads', gradient: 'from-green-light to-cream',
    title: 'Advanced Google Ads Management in 2025: What Actually Works (And What to Stop Doing)',
    excerpt: 'Broad match keywords, PMax without asset groups, and missing negative keyword lists are costing businesses 30–50% of their budget. Here is what to do instead.',
    date: 'March 15, 2025', read: '7 min read' },
  { emoji: '🎵', category: 'TikTok Ads', gradient: 'from-amber-50 to-cream',
    title: 'TikTok Ads in 2025: Why Most Brands Are Still Missing the Biggest Opportunity in Paid Media',
    excerpt: 'TikTok CPCs are still 40–60% cheaper than Meta. The brands winning on TikTok right now are doing 3 specific things differently. Here is exactly what they are.',
    date: 'March 8, 2025', read: '5 min read' },
  { emoji: '⚡', category: 'GoHighLevel', gradient: 'from-blue-light to-cream',
    title: 'The 7-Day Lead Follow-Up Sequence That Converts 400% More Leads Without Spending More on Ads',
    excerpt: 'Businesses that follow up within 5 minutes convert 400% more leads than those that respond in 2 hours. Here is the exact automated GoHighLevel sequence.',
    date: 'March 1, 2025', read: '8 min read' },
  { emoji: '💰', category: 'Strategy', gradient: 'from-red-50 to-cream',
    title: 'Why ROAS Is the Wrong Metric to Optimize For (And What to Measure Instead)',
    excerpt: 'Chasing ROAS is destroying profitability for most eCommerce brands. MER (Media Efficiency Ratio) is the metric that actually tells you if your marketing is working.',
    date: 'Feb 22, 2025', read: '6 min read' },
  { emoji: '🛒', category: 'eCommerce', gradient: 'from-green-light to-blue-light',
    title: 'The 3-Layer Audience Architecture That Doubled ROAS for 6 Different Shopify Brands',
    excerpt: 'Most eCommerce brands only target cold audiences. The highest ROI is in Layers 2 and 3 — warm retargeting and hot remarketing. Here is exactly how to build all three.',
    date: 'Feb 14, 2025', read: '7 min read' },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Blog"
        eyebrow="Insights & Strategies"
        title={<>Advanced media buying<br /><em className="not-italic font-fraunces font-light text-blue">insights</em> &amp; strategies</>}
        desc="Real strategies, honest breakdowns, and actionable insights for businesses spending seriously on paid advertising. No basic tips — just advanced content that moves the needle."
      />

      {/* FEATURED POST */}
      <section className="bg-white px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <Eyebrow>Featured Article</Eyebrow>
          <div className="bg-cream border border-border rounded-[36px] overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:-translate-y-1 hover:shadow-lg hover:border-blue/15 transition-all duration-300">
            <div className="flex items-center justify-center text-[80px] min-h-[220px] md:min-h-[280px]"
              style={{ background: 'linear-gradient(135deg,#edf0ff,#faf8f4)' }}>
              {featured.emoji}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
              <Badge variant="blue">{featured.category}</Badge>
              <h2 className="font-syne font-extrabold text-ink leading-[1.1] tracking-[-1px]"
                style={{ fontSize: 'clamp(22px,3vw,32px)' }}>
                {featured.title}
              </h2>
              <p className="text-sm text-muted leading-[1.8]">{featured.excerpt}</p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-xs text-muted2 font-medium">{featured.date} · {featured.read}</span>
                <a href="#" className="text-sm font-bold text-blue flex items-center gap-1 hover:gap-2 transition-all no-underline">Read Article →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-cream px-5 md:px-[72px] pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
            <div>
              <Eyebrow>All Articles</Eyebrow>
              <H2>Latest <em className="not-italic font-fraunces font-light text-blue">insights</em></H2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All','Meta Ads','Google Ads','TikTok Ads','Strategy','eCommerce'].map((cat, i) => (
                <button key={cat}
                  className={`text-xs font-bold px-4 py-2 rounded-full border-[1.5px] transition-all duration-200 font-jakarta ${
                    i === 0 ? 'bg-blue text-white border-blue' : 'bg-transparent text-muted border-border hover:border-blue hover:text-blue'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p) => (
              <div key={p.title}
                className="bg-white border border-border rounded-[36px] overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-lg hover:border-blue/15 transition-all duration-300 group">
                <div className={`h-[180px] flex items-center justify-center text-5xl bg-gradient-to-br ${p.gradient}`}>
                  {p.emoji}
                </div>
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <div className="text-[11px] font-bold text-blue tracking-[1.5px] uppercase">{p.category}</div>
                  <div className="font-syne font-bold text-ink leading-[1.2] tracking-[-0.3px] group-hover:text-blue transition-colors"
                    style={{ fontSize: 'clamp(16px,2vw,20px)' }}>
                    {p.title}
                  </div>
                  <p className="text-sm text-muted leading-[1.7] flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border flex-wrap gap-2">
                    <span className="text-xs text-muted2 font-medium">{p.date} · {p.read}</span>
                    <a href="#" className="text-xs font-bold text-blue flex items-center gap-1 group-hover:gap-2 transition-all no-underline">Read →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink2 px-5 md:px-[72px] py-20 md:py-28">
        <div className="max-w-[640px] mx-auto text-center">
          <Eyebrow light>Stay Ahead</Eyebrow>
          <H2 white className="mb-4">Get advanced media buying<br /><em className="not-italic font-fraunces font-light text-[#7fb8ff]">insights</em> in your inbox</H2>
          <p className="text-sm text-white/45 leading-relaxed mb-8 max-w-[480px] mx-auto">
            Join 2,000+ marketers and business owners getting weekly insights on paid ads, scaling strategies, and performance marketing.
          </p>
          <div className="flex gap-2.5 max-w-[480px] mx-auto flex-wrap">
            <input type="email" placeholder="your@email.com"
              className="flex-1 min-w-[200px] bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-white/30 px-4 py-3 text-sm rounded-lg outline-none focus:border-blue transition-colors font-jakarta" />
            <BtnBlue href="/contact">Subscribe →</BtnBlue>
          </div>
          <p className="text-xs text-white/30 mt-3">No spam. Unsubscribe anytime. Weekly insights only.</p>
        </div>
      </section>

      <CTAStrip title="Want these strategies applied to your campaigns?" sub="Apply for a free audit and get a personalized action plan." />
    </>
  );
}
