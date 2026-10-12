import { Check } from 'lucide-react';
import { aboutData } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div ref={ref} className={`relative reveal ${visible ? 'visible' : ''}`}>
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4549736/pexels-photo-4549736.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern skyscraper and palm trees in Dubai, UAE"
                className="w-full h-[520px] object-cover"
              />
            </div>
            {/* Accent frame */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-24 border-b-2 border-r-2 border-accent-500 hidden md:block" />
          </div>

          {/* Text */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
              About First Select
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light leading-tight mb-6">
              {aboutData.heading}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-5">
              {aboutData.intro}
            </p>
            {aboutData.body.map((paragraph, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}

            {/* Features */}
            <div className="mt-8 space-y-3">
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                With us, you get:
              </p>
              {aboutData.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-50 text-accent-600">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-neutral-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
