import { useEffect, useRef, useState } from 'react';
import { results } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, started]);

  return <span ref={ref}>{count}</span>;
}

export default function Results() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 lg:py-24 bg-primary-900">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-accent-400 text-sm tracking-widest-2 uppercase font-medium mb-3">
            Our Results
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((item, i) => (
            <div
              key={item.label}
              className={`text-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="font-serif text-5xl md:text-6xl text-accent-400 font-light mb-3">
                <Counter target={item.number} />
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-[200px] mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
