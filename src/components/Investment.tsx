import { investmentStats } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Investment() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Dubai skyline illuminated at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/85" />
      </div>

      <div className="relative z-10 container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
            Invest in solutions, <span className="text-gradient-gold">not promises!</span>
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {investmentStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent-400 font-light mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-[180px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
