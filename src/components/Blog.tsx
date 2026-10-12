import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Blog() {
  const { ref, visible } = useReveal();

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            Insights
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Latest Articles
          </h2>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/95 flex items-center justify-center rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-primary-700" />
                </div>
              </div>
              <h3 className="font-serif text-lg text-primary-900 font-medium leading-snug group-hover:text-accent-600 transition-colors duration-300">
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
