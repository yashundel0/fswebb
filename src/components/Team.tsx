import { team } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Team() {
  const { ref, visible } = useReveal();

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            Meet the Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Our People
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <h3 className="font-serif text-xl text-primary-900 font-medium text-center">
                {member.name}
              </h3>
              <p className="text-sm text-accent-600 text-center mt-1 tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
