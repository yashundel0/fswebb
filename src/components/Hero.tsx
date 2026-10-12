import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '@/data/content';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image — the key visual */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1415794/pexels-photo-1415794.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Dubai skyline with modern skyscrapers reflecting sunlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide">
        <div className="max-w-3xl">
          <p className="text-accent-300 text-sm tracking-widest-2 uppercase font-medium mb-6 animate-fade-down">
            {heroData.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] mb-6 animate-fade-up">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {heroData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-primary-900 font-medium tracking-wide hover:bg-accent-400 transition-all duration-300 hover:shadow-xl group"
            >
              {heroData.primaryCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {heroData.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
