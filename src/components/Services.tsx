import { ArrowUpRight, Building2, Key, PaintRoller, FileCheck } from 'lucide-react';
import { services } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const icons = {
  building: Building2,
  key: Key,
  paint: PaintRoller,
  license: FileCheck,
};

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Our Services
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden bg-white card-hover reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 bg-white/95 flex items-center justify-center rounded-sm">
                    <Icon className="w-5 h-5 text-primary-700" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary-900 font-medium mb-2 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
