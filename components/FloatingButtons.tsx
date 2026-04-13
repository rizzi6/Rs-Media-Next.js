'use client';
import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20paid%20media%20audit."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[84px] right-[22px] z-50 w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl text-white transition-all duration-300 hover:scale-110 group"
        style={{ background: '#25d366', boxShadow: '0 6px 24px rgba(37,211,102,.35)' }}
        aria-label="WhatsApp"
      >
        💬
        <span className="absolute right-[58px] top-1/2 -translate-y-1/2 bg-ink text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-[22px] right-[22px] z-50 w-11 h-11 rounded-full bg-blue text-white flex items-center justify-center text-lg border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
          show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ boxShadow: '0 8px 32px rgba(26,82,255,.22)' }}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
