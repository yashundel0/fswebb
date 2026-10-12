import { portfolioImages } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Portfolio() {
  const { ref, visible } = useReveal();

  return (
    <section id="portfolio" className="section-padding bg-neutral-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Portfolio
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`overflow-hidden ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <img
                  src={img}
                  alt={`Portfolio project ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? 'h-64 lg:h-full min-h-[300px]' : 'h-48 lg:h-56'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
