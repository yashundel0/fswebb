import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { company } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 text-sm tracking-widest-2 uppercase font-medium mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-900 font-light">
            Contact Us
          </h2>
          <p className="text-neutral-500 mt-4 leading-relaxed">
            We're always available and ready to answer your questions. Call or write to us!
          </p>
          <div className="w-16 h-px bg-accent-500 mx-auto mt-6" />
        </div>

        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 reveal ${visible ? 'visible' : ''}`}>
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-primary-900 font-medium mb-8">
              Write to us
            </h3>

            {/* Phone */}
            <a
              href={company.phoneHref}
              className="flex items-center gap-5 group p-5 border border-neutral-200 hover:border-accent-300 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center transition-colors rounded-sm">
                <Phone className="w-5 h-5 text-primary-700 group-hover:text-accent-600 transition-colors" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest-2 text-neutral-400 mb-1">Phone</p>
                <p className="text-primary-900 font-medium">{company.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={company.emailHref}
              className="flex items-center gap-5 group p-5 border border-neutral-200 hover:border-accent-300 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center transition-colors rounded-sm">
                <Mail className="w-5 h-5 text-primary-700 group-hover:text-accent-600 transition-colors" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest-2 text-neutral-400 mb-1">E-mail</p>
                <p className="text-primary-900 font-medium">{company.email}</p>
              </div>
            </a>

            {/* Address */}
            <a
              href={company.addressHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group p-5 border border-neutral-200 hover:border-accent-300 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center transition-colors rounded-sm">
                <MapPin className="w-5 h-5 text-primary-700 group-hover:text-accent-600 transition-colors" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest-2 text-neutral-400 mb-1">Address</p>
                <p className="text-primary-900 font-medium">{company.address}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group p-5 border border-neutral-200 hover:border-accent-300 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-50 group-hover:bg-accent-50 flex items-center justify-center transition-colors rounded-sm">
                <MessageCircle className="w-5 h-5 text-primary-700 group-hover:text-accent-600 transition-colors" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest-2 text-neutral-400 mb-1">WhatsApp</p>
                <p className="text-primary-900 font-medium">{company.phone}</p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-neutral-50 p-8 lg:p-10">
            <h3 className="font-serif text-2xl text-primary-900 font-medium mb-2">
              Leave your details
            </h3>
            <p className="text-sm text-neutral-500 mb-8">
              and our managers will contact you shortly
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-success-500/10 border border-success-500/30 text-success-600 text-sm rounded-sm">
                Thank you! Your message has been sent. We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 text-neutral-800 focus:outline-none focus:border-accent-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 text-neutral-800 focus:outline-none focus:border-accent-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 text-neutral-800 focus:outline-none focus:border-accent-400 transition-colors"
                  placeholder="+971 ..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 text-neutral-800 focus:outline-none focus:border-accent-400 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white font-medium tracking-wide hover:bg-primary-800 transition-all duration-300 hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
