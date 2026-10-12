import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-neutral-50">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border border-neutral-200 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <span className="font-serif text-lg text-primary-900 font-medium">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-accent-600 group-hover:bg-accent-50 transition-colors rounded-full">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-neutral-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
