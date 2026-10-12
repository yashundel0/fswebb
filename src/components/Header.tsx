import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { company, navLinks } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary-900 text-neutral-300 text-sm">
        <div className="container-wide flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 hover:text-accent-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{company.phone}</span>
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2 hover:text-accent-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{company.email}</span>
            </a>
            <a
              href={company.addressHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{company.address}</span>
            </a>
          </div>
          <span className="text-neutral-400 text-xs tracking-widest-2 uppercase">
            {company.tagline}
          </span>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/0 py-5'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-2xl font-bold transition-colors ${
                  scrolled ? 'text-primary-900' : 'text-primary-900'
                }`}
              >
                First<span className="text-accent-500">Select</span>
              </span>
              <span className="text-[10px] tracking-widest-2 uppercase text-neutral-400 mt-0.5">
                Dubai Real Estate
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide link-underline transition-colors ${
                  scrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-neutral-700 hover:text-primary-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary-700 text-white text-sm font-medium tracking-wide hover:bg-primary-800 transition-all duration-300 hover:shadow-lg"
          >
            Free consultation
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-primary-900"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 animate-fade-in">
            <nav className="container-wide flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 px-4 text-neutral-700 hover:bg-neutral-50 hover:text-primary-700 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 py-3 px-4 bg-primary-700 text-white text-sm font-medium text-center rounded-md"
              >
                Free consultation
              </a>
              <div className="flex flex-col gap-3 py-4 border-t border-neutral-100 mt-2">
                <a href={company.phoneHref} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Phone className="w-4 h-4 text-accent-500" /> {company.phone}
                </a>
                <a href={company.emailHref} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Mail className="w-4 h-4 text-accent-500" /> {company.email}
                </a>
                <a href={company.addressHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-600">
                  <MapPin className="w-4 h-4 text-accent-500" /> {company.address}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
