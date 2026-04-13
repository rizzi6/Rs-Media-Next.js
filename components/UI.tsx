import Link from 'next/link';

// ── Eyebrow label ──
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[2.5px] uppercase mb-[18px] ${light ? 'text-[#7fb8ff]' : 'text-blue'}`}>
      <span className={`w-[22px] h-[2px] rounded-sm flex-shrink-0 ${light ? 'bg-[#7fb8ff]' : 'bg-blue'}`} />
      {children}
    </div>
  );
}

// ── Section heading ──
export function H2({ children, white = false, className = '' }: { children: React.ReactNode; white?: boolean; className?: string }) {
  return (
    <h2 className={`font-syne font-extrabold leading-[1.05] tracking-[-2px] ${white ? 'text-white' : 'text-ink'} ${className}`}
      style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
      {children}
    </h2>
  );
}

// ── Blue pill tag ──
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold text-blue bg-blue-light px-[11px] py-1 rounded-full">
      {children}
    </span>
  );
}

// ── Badge ──
export function Badge({ children, variant = 'green' }: { children: React.ReactNode; variant?: 'green' | 'blue' | 'amber' }) {
  const styles: Record<string, string> = {
    green: 'bg-green-light text-green',
    blue: 'bg-blue-light text-blue',
    amber: 'bg-amber-50 text-amber-600',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.5px] uppercase px-3 py-[5px] rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
}

// ── Buttons ──
export function BtnBlue({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href}
      className={`inline-flex items-center gap-2 bg-blue text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 no-underline hover:bg-blue-dark hover:-translate-y-0.5 ${className}`}
      style={{ boxShadow: '0 8px 32px rgba(26,82,255,.22)' }}>
      {children}
    </Link>
  );
}

export function BtnOutline({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href}
      className={`inline-flex items-center gap-2 bg-transparent text-ink text-sm font-semibold px-7 py-3.5 rounded-full border-[1.5px] border-border transition-all duration-200 no-underline hover:border-ink hover:bg-ink hover:text-white ${className}`}>
      {children}
    </Link>
  );
}

export function BtnWhite({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href}
      className={`inline-flex items-center gap-2 bg-white text-blue text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 no-underline hover:bg-ink hover:text-white ${className}`}>
      {children}
    </Link>
  );
}

// ── Marquee ──
const marqueeItems = ['Meta Ads','Google Ads','TikTok Ads','GoHighLevel','Shopify','Lead Generation','ROAS Optimization','CRO','Performance Marketing','Attribution Tracking','Email Marketing','Sales Funnels'];

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden bg-blue py-[13px]">
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="font-syne text-[12px] font-bold tracking-[2px] uppercase text-white/80 px-7 flex items-center gap-3.5 flex-shrink-0">
            {item}
            <span className="text-white/35 text-[6px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Numbers Strip ──
const stats = [
  { val: '$2M+', lbl: 'Total ad spend managed' },
  { val: '4.8x', lbl: 'Average ROAS delivered' },
  { val: '150+', lbl: 'Campaigns launched' },
  { val: '10+', lbl: 'Countries served' },
];

export function NumbersStrip() {
  return (
    <div className="bg-ink py-10 md:py-[72px] px-5 md:px-[72px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06]">
        {stats.map((s) => (
          <div key={s.val} className="bg-ink px-5 md:px-10 py-7 md:py-12 hover:bg-ink2 transition-colors duration-300">
            <div className="font-syne font-extrabold text-white leading-none mb-2 tracking-[-2px]"
              style={{ fontSize: 'clamp(40px,5vw,64px)' }}>
              {s.val.replace(/(\+|x)/g, '')}
              <span className="text-blue">{s.val.match(/(\+|x)/)?.[0]}</span>
            </div>
            <div className="text-[13px] text-white/45 font-medium">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CTA Strip ──
export function CTAStrip({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="bg-blue px-5 md:px-[72px] py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <div className="font-syne font-extrabold text-white tracking-[-1px] leading-[1.1]"
          style={{ fontSize: 'clamp(24px,3.5vw,40px)' }}>
          {title}
        </div>
        <div className="text-[15px] text-white/65 mt-2">{sub}</div>
      </div>
      <BtnWhite href="/contact" className="flex-shrink-0">Apply for Free Audit →</BtnWhite>
    </div>
  );
}

// ── Page Hero ──
export function PageHero({
  eyebrow, title, desc, breadcrumb,
}: {
  eyebrow: string; title: React.ReactNode; desc: string; breadcrumb: string;
}) {
  return (
    <div className="bg-white px-5 md:px-[72px] pt-[130px] pb-[100px] border-b border-border relative overflow-hidden">
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,82,255,.055) 0%,transparent 70%)' }} />
      <div className="max-w-[800px] relative">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted2 mb-6">
          <Link href="/" className="text-muted2 hover:text-blue transition-colors no-underline">Home</Link>
          <span>/</span>
          <span className="text-ink">{breadcrumb}</span>
        </div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-syne font-extrabold leading-[1.02] tracking-[-3px] text-ink mb-6"
          style={{ fontSize: 'clamp(44px,6.5vw,88px)' }}>
          {title}
        </h1>
        <p className="text-muted leading-[1.85]" style={{ fontSize: 'clamp(15px,1.7vw,17px)', maxWidth: '600px' }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// ── Stat Card (hero) ──
export function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-cream border border-border rounded-[28px] px-6 md:px-8 py-6 md:py-8 hover:border-blue/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue to-[#6b9cff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-[3px]" />
      <div className="font-syne font-extrabold text-ink leading-none mb-1.5 tracking-[-2px]"
        style={{ fontSize: 'clamp(36px,4.5vw,52px)' }}>
        {num.replace(/([\+x])/, '')}<em className="not-italic text-blue font-fraunces font-light">{num.match(/([\+x])/)?.[0]}</em>
      </div>
      <div className="text-[12px] font-medium text-muted">{label}</div>
    </div>
  );
}

// ── Testimonial Card ──
export function TestiCard({ quote, name, role, initials }: { quote: string; name: string; role: string; initials: string }) {
  return (
    <div className="bg-white border border-border rounded-[36px] p-6 md:p-9 flex flex-col gap-[18px] hover:border-blue/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1">{'★★★★★'.split('').map((s, i) => <span key={i} className="text-amber-500 text-[15px]">{s}</span>)}</div>
      <p className="text-[15px] leading-[1.85] text-ink flex-1">{quote}</p>
      <div className="flex items-center gap-3 pt-[18px] border-t border-border">
        <div className="w-11 h-11 rounded-full flex items-center justify-center font-syne text-[15px] font-extrabold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#1a52ff,#6b9cff)' }}>
          {initials}
        </div>
        <div>
          <div className="font-syne text-[14px] font-bold text-ink">{name}</div>
          <div className="text-[12px] text-muted font-medium mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  );
}
