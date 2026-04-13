'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/results', label: 'Results' },
  { href: '/process', label: 'Process' },
  { href: '/why-me', label: 'Why Me' },
  { href: '/clients', label: 'Clients' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-5 md:px-[72px] transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
        style={{
          background: 'rgba(250,248,244,0.92)',
          backdropFilter: 'blur(24px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.5)',
          borderBottom: '1px solid rgba(232,232,236,0.7)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-syne text-[17px] font-extrabold text-ink no-underline">
          <span className="pulse-dot w-[9px] h-[9px] rounded-full bg-blue flex-shrink-0" />
          RS.Media
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[12.5px] font-medium px-3 py-1.5 rounded-full transition-all duration-200 no-underline ${
                  pathname === l.href
                    ? 'text-ink bg-gray-100'
                    : 'text-muted hover:text-ink hover:bg-gray-100'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-[13px] font-bold text-white bg-ink px-5 py-2 rounded-full ml-2 hover:bg-blue transition-all duration-200 shadow-sm no-underline"
            >
              Work With Me
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1.5 border-none bg-transparent cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-[22px] h-[2px] bg-ink rounded-sm transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }}
          />
          <span
            className="block w-[22px] h-[2px] bg-ink rounded-sm transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-[22px] h-[2px] bg-ink rounded-sm transition-all duration-300"
            style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-cream z-40 flex flex-col gap-1 px-5 py-7 overflow-y-auto transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`font-syne text-xl font-bold py-3.5 border-b border-border block no-underline transition-colors duration-200 ${
              pathname === l.href ? 'text-blue' : 'text-ink hover:text-blue'
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-5 bg-blue text-white text-center py-4 rounded-2xl font-bold text-base no-underline"
        >
          Work With Me →
        </Link>
      </div>
    </>
  );
}
