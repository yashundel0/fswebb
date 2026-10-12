import { Award, MessageSquare, Users, ShieldCheck, Headphones, Lock } from 'lucide-react';
import { benefits } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const icons = [Award, MessageSquare, Users, ShieldCheck, Headphones, Lock];

export default function Benefits() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Our Advantages
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <div
                key={benefit.title}
                className={`group p-8 border border-neutral-200 hover:border-accent-300 transition-all duration-400 reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-14 h-14 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center mb-6 transition-colors duration-400">
                  <Icon className="w-6 h-6 text-primary-700 group-hover:text-accent-600 transition-colors duration-400" />
                </div>
                <h3 className="font-serif text-xl text-primary-900 font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
