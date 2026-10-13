import { useRouter } from '@/hooks/useRouter';
import { servicesDetailed } from '@/data/services';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Investment from '@/components/Investment';
import Benefits from '@/components/Benefits';
import Results from '@/components/Results';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServicePage from '@/components/ServicePage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Investment />
      <Benefits />
      <Results />
      <Portfolio />
      <Team />
      <CTABanner />
      <FAQ />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  const { route } = useRouter();

  const serviceDetail =
    route.name === 'service'
      ? servicesDetailed.find((s) => s.slug === route.slug)
      : null;

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      <Header />
      <main>
        {serviceDetail ? (
          <ServicePage service={serviceDetail} allServices={servicesDetailed} />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
