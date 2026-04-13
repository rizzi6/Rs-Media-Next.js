import Link from 'next/link';

const services = ['Meta Ads', 'Google Ads', 'TikTok Ads', 'GoHighLevel', 'eCommerce Growth', 'Tracking & Attribution'];
const company = [
  { label: 'Why Me', href: '/why-me' },
  { label: 'Results', href: '/results' },
  { label: 'Process', href: '/process' },
  { label: 'Clients', href: '/clients' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white px-5 md:px-[72px] pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mb-16 pb-16 border-b border-white/[0.07]">
          <div>
            <div className="font-syne text-[18px] font-extrabold mb-3.5">
              RS<span className="text-blue">.</span>Media
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
              Advanced media buying and full-funnel paid acquisition systems for businesses in the USA, Australia, UK, and Europe.
            </p>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-4">Services</div>
            <ul className="flex flex-col gap-2.5 list-none">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/50 hover:text-white transition-colors no-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-4">Company</div>
            <ul className="flex flex-col gap-2.5 list-none">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/50 hover:text-white transition-colors no-underline">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-4">Connect</div>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                { label: 'Upwork Profile', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Instagram', href: '#' },
                { label: 'WhatsApp', href: 'https://wa.me/923001234567' },
                { label: 'hello@rizwansaleem.com', href: 'mailto:hello@rizwansaleem.com' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="text-[13px] text-white/30">© 2025 Rizwan Saleem. All rights reserved.</p>
          <div className="flex gap-2.5">
            {['in', 'ig', 'tw'].map((s) => (
              <a key={s} href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.09] flex items-center justify-center text-xs font-bold text-white/50 hover:bg-blue hover:border-blue hover:text-white transition-all hover:-translate-y-0.5 no-underline">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
