import { Phone } from 'lucide-react';
import { ctaBanner, company } from '@/data/content';

export default function CTABanner() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-accent-500" />
      <div className="relative z-10 container-wide text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light leading-tight mb-4">
          {ctaBanner.heading}
        </h2>
        <p className="text-lg text-primary-800 mb-8 font-medium">
          {ctaBanner.subheading}
        </p>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-medium tracking-wide hover:bg-primary-800 transition-all duration-300 hover:shadow-xl"
        >
          <Phone className="w-4 h-4" />
          {company.phone}
        </a>
      </div>
    </section>
  );
}
