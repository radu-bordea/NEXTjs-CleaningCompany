'use client';
import { useEffect, useMemo, useState } from 'react';

const navlinks = ['Acasă', 'Servicii', 'Lucrări', 'Despre', 'Contact'];

// Elimină diacritice & caractere speciale -> slug pentru id/href
const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // scoate diacriticele
    .replace(/[^a-zA-Z0-9]+/g, '-')  // înlocuiește spații/semne cu '-'
    .toLowerCase()
    .replace(/^-+|-+$/g, '');        // taie '-' la capete

const Navbar = () => {
  const [active, setActive] = useState('Acasă');
  const [open, setOpen] = useState(false);

  // Precompute map: { label -> slug }  ex: 'Acasă' -> 'acasa'
  const slugs = useMemo(
    () => Object.fromEntries(navlinks.map(l => [l, slugify(l)])),
    []
  );

  // Track section in view (folosește slug-urile!)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navlinks) {
        const id = slugs[link];
        const section = document.getElementById(id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slugs]);

  // Închide meniul la resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll când e deschis
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : original || '';
    return () => { document.body.style.overflow = original || ''; };
  }, [open]);

  const linkClasses = (isActive: boolean) =>
    `block px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive ? 'text-amber-300' : 'text-gray-200 hover:text-amber-300'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Bar */}
      <div className="h-16 bg-neutral-800/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-800/60 shadow-2xl shadow-neutral-900/20">
        <div className="container mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
          {/* Brand */}
          <a
            href={`#${slugs['Acasă']}`}
            onClick={() => {
              setActive('Acasă');
              setOpen(false);
            }}
            className="font-semibold text-lg tracking-wide text-gray-100"
          >
            Servicii Curățenie
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navlinks.map((link) => {
              const id = slugs[link];
              const isActive = active === link;
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setActive(link)}
                  className={linkClasses(isActive)}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-300"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            onClick={() => setOpen(v => !v)}
          >
            <span className="relative block w-6 h-6">
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-transform duration-200 ${open ? 'rotate-45 -translate-y-1/2' : '-translate-y-[8px]'}`} />
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-transform duration-200 ${open ? '-rotate-45 -translate-y-1/2' : 'translate-y-[8px]'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Overlay sub bar (X rămâne clicabil) */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-black/50 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-16 left-0 right-0 z-50 origin-top bg-neutral-800 border-t border-neutral-700 shadow-xl rounded-b-2xl transition-[transform,opacity] duration-200 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1 text-sm font-medium">
          {navlinks.map((link) => {
            const id = slugs[link];
            const isActive = active === link;
            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={() => {
                  setActive(link);
                  setOpen(false);
                }}
                className={linkClasses(isActive)}
              >
                {link}
              </a>
            );
          })}
          <div className="pt-2 border-t border-neutral-700/60 flex items-center gap-3 text-xs text-neutral-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Programări disponibile
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
