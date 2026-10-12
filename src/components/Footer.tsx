import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { company, navLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-neutral-400">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl font-bold text-white">
                First<span className="text-accent-400">Select</span>
              </span>
              <span className="text-[10px] tracking-widest-2 uppercase text-neutral-500 mt-1">
                Dubai Real Estate
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {company.aboutText}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium mb-6">Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-accent-400 transition-colors link-underline w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-sm hover:text-accent-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-500" />
                {company.phone}
              </a>
              <a
                href={company.emailHref}
                className="flex items-center gap-3 text-sm hover:text-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-500" />
                {company.email}
              </a>
              <a
                href={company.addressHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-accent-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent-500" />
                {company.address}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-neutral-500 hover:text-accent-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
