import { Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 lg:py-24 bg-primary-50">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-3">
            About Us
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-900 font-light">
            Our Clients' Testimonials
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-white p-8 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-accent-300 mb-4" />
              <p className="text-neutral-600 leading-relaxed text-sm italic">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
