import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Plus,
  Minus,
  Quote,
  Award,
  MessageSquare,
  Users,
  ShieldCheck,
  Headphones,
  Lock,
  Building2,
  Key,
  PaintRoller,
  FileCheck,
} from 'lucide-react';
import type { ServiceDetail } from '@/data/services';
import { investmentStatsByService } from '@/data/services';
import { company } from '@/data/content';
import { servicePath } from '@/hooks/useRouter';
import { useReveal } from '@/hooks/useReveal';

const icons = {
  building: Building2,
  key: Key,
  paint: PaintRoller,
  license: FileCheck,
};

const benefitIcons = [Award, MessageSquare, Users, ShieldCheck, Headphones, Lock];

type Props = {
  service: ServiceDetail;
  allServices: ServiceDetail[];
};

export default function ServicePage({ service, allServices }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { ref: heroRef, visible: heroVisible } = useReveal();
  const { ref: sectionsRef, visible: sectionsVisible } = useReveal();
  const { ref: highlightsRef, visible: highlightsVisible } = useReveal();
  const { ref: statsRef, visible: statsVisible } = useReveal();
  const { ref: testimonialsRef, visible: testimonialsVisible } = useReveal();
  const { ref: otherServicesRef, visible: otherServicesVisible } = useReveal();

  const Icon = icons[service.icon as keyof typeof icons];
  const stats = investmentStatsByService[service.slug] || investmentStatsByService['buy-and-sale'];
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/50 to-primary-900/30" />
        </div>

        <div className="relative z-10 container-wide pb-16 pt-32">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
          <div ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 bg-accent-500/90 flex items-center justify-center rounded-sm">
                <Icon className="w-5 h-5 text-primary-900" />
              </span>
              <span className="text-accent-300 text-sm tracking-widest-2 uppercase font-medium">
                Our Services
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-neutral-200 font-light leading-relaxed max-w-2xl">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-lg text-neutral-600 leading-relaxed font-light">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div ref={sectionsRef} className="container-wide max-w-4xl space-y-12">
          {service.sections.map((section, i) => (
            <div
              key={i}
              className={`reveal ${sectionsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {section.heading && (
                <h2 className="font-serif text-2xl md:text-3xl text-primary-900 font-medium mb-5">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, j) => (
                <p key={j} className="text-neutral-600 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Sub-services (for parent services like Interior Design) */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-16 lg:py-20 bg-neutral-50">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
                Our Services
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-900 font-light">
                What We Offer
              </h2>
              <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.subServices.map((sub, i) => (
                <a
                  key={sub.slug}
                  href={servicePath(sub.slug)}
                  className={`group p-8 border border-neutral-200 hover:border-accent-300 transition-all duration-400 bg-white card-hover`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <h3 className="font-serif text-xl text-primary-900 font-medium mb-3 group-hover:text-accent-600 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {sub.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-accent-600 mt-4 font-medium">
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Investment stats */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900" />
        <div className="relative z-10 container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
              Invest in solutions, <span className="text-gradient-gold">not promises!</span>
            </h2>
            <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
          </div>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center reveal ${statsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="font-serif text-4xl md:text-5xl text-accent-400 font-light mb-2">
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

      {/* Highlights / Benefits */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-900 font-light">
              Our Advantages
            </h2>
            <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
          </div>
          <div ref={highlightsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.highlights.map((highlight, i) => {
              const BIcon = benefitIcons[i % benefitIcons.length];
              return (
                <div
                  key={highlight.title}
                  className={`group p-8 border border-neutral-200 hover:border-accent-300 transition-all duration-400 reveal ${highlightsVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-14 h-14 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center mb-6 transition-colors duration-400">
                    <BIcon className="w-6 h-6 text-primary-700 group-hover:text-accent-600 transition-colors duration-400" />
                  </div>
                  <h3 className="font-serif text-xl text-primary-900 font-medium mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-accent-500" />
        <div className="relative z-10 container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-900 font-light leading-tight mb-4">
            {service.ctaHeading}
          </h2>
          <p className="text-lg text-primary-800 mb-8 font-medium">
            {service.ctaSubheading}
          </p>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-medium tracking-wide hover:bg-primary-800 transition-all duration-300 hover:shadow-xl"
          >
            <Phone className="w-4 h-4" />
            {company.phone}
          </a>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-16">
              <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
                FAQ
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-900 font-light">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span className="font-serif text-lg text-primary-900 font-medium">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-accent-600 group-hover:bg-accent-50 transition-colors rounded-full">
                      {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      openFaq === i ? 'max-h-96' : 'max-h-0'
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
      )}

      {/* Testimonials */}
      {service.testimonials.length > 0 && (
        <section className="py-20 lg:py-24 bg-primary-50">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-3">
                About Us
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-primary-900 font-light">
                Our Clients' Testimonials
              </h2>
              <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
            </div>
            <div ref={testimonialsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`bg-white p-8 reveal ${testimonialsVisible ? 'visible' : ''}`}
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
      )}

      {/* Other services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-900 font-light">
              Other Services
            </h2>
            <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
          </div>
          <div ref={otherServicesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((other, i) => {
              const OIcon = icons[other.icon as keyof typeof icons];
              return (
                <a
                  key={other.slug}
                  href={servicePath(other.slug)}
                  className={`group p-6 border border-neutral-200 hover:border-accent-300 transition-all duration-400 reveal ${otherServicesVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center mb-4 transition-colors">
                    <OIcon className="w-5 h-5 text-primary-700 group-hover:text-accent-600 transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg text-primary-900 font-medium mb-2">
                    {other.shortTitle}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                    {other.tagline}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-primary-900">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a href={company.phoneHref} className="flex items-center gap-2 text-neutral-300 hover:text-accent-400 transition-colors">
              <Phone className="w-4 h-4 text-accent-500" />
              <span className="text-sm">{company.phone}</span>
            </a>
            <a href={company.emailHref} className="text-neutral-300 hover:text-accent-400 transition-colors text-sm">
              {company.email}
            </a>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-accent-500 text-primary-900 text-sm font-medium tracking-wide hover:bg-accent-400 transition-colors"
          >
            Free consultation
          </a>
        </div>
      </section>
    </div>
  );
}
