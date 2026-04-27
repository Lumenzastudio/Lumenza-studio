import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Home Page - Organic Modernism Design
 * Hero with generated image, service overview, trust indicators
 * Warm, welcoming aesthetic with soft shadows and smooth transitions
 */
export default function Home() {
  const services = [
    {
      title: "Rough Clean",
      description: "Removal of debris, dust, and protective coverings with initial surface cleaning",
      icon: "🧹",
    },
    {
      title: "Main Clean",
      description: "Detailed cleaning of surfaces, fixtures, windows, and comprehensive floor polishing",
      icon: "✨",
    },
    {
      title: "Final Clean",
      description: "Final touch-ups, glass detailing, and presentation-ready finishing",
      icon: "💎",
    },
  ];

  // Clients removed from array - ITC now uses logo image

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663501150731/Rz2pHNbVwJsEnWKozyoKwa/hero-cleaning-empty-space-Kcb4YcwPC2gASuMRDXgUtT.webp"
              alt="Clean, empty post-construction space ready for occupancy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40"></div>
          </div>

          <div className="relative container py-20 md:py-32">
            <div className="max-w-2xl">
              <h2 className="font-display text-6xl md:text-7xl font-normal text-foreground mb-3 leading-tight animate-drop-in">
                LUMENZA
              </h2>
              <h1 className="font-display text-3xl md:text-4xl font-light text-accent mb-6 leading-tight animate-drop-in">
                Where spaces come to Light
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed animate-drop-in">
                Professional, reliable, and detail-oriented cleaning services across Canada. We transform construction sites into pristine spaces ready for occupancy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-secondary text-base px-8 py-6"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Clients</p>
              <p className="text-foreground/70 mt-2">Leading builders and developers across Canada</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* ITC Logo */}
              <div className="text-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663501150731/Rz2pHNbVwJsEnWKozyoKwa/pasted_file_N7ZaLE_image_fe0424f1.png"
                  alt="ITC Logo"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              {/* SKY ROPES SERVICES Logo */}
              <div className="text-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663501150731/Rz2pHNbVwJsEnWKozyoKwa/pasted_file_ixacxp_image_3c8ae7cc.png"
                  alt="SKY ROPES SERVICES Logo"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16 scroll-trigger">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-drop-in">
                Our Three-Stage Process
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-drop-in">
                Comprehensive cleaning tailored to your project timeline and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all group animate-drop-in scroll-trigger"
                >
                  <div className="text-5xl mb-4 animate-icon-pulse">{service.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className="py-16 md:py-24 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663501150731/Rz2pHNbVwJsEnWKozyoKwa/trust-section-bg-kD7i7stQu5Q8JqsrxqQK5B.webp')",
          }}
        >
          <div className="absolute inset-0 bg-background/70"></div>
          <div className="relative container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center animate-drop-in scroll-trigger">
                Why Choose Lumenza
              </h2>

              <div className="space-y-6">
                {[
                  "Thoughtful and functional approach to every project",
                  "Professional and reliable service every time",
                  "Clean, modern aesthetics and attention to detail",
                  "Detail-oriented execution with quality assurance",
                  "Honest communication and collaborative partnership",
                ].map((value, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-card/80 p-6 rounded-xl animate-drop-in scroll-trigger">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 animate-icon-pulse" />
                    <p className="text-foreground text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-6 animate-drop-in scroll-trigger">
              Ready to Get Started?
            </h2>
              <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto animate-drop-in scroll-trigger">
              Contact us today for a free quote on your post-construction cleaning project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent text-base px-8 py-6">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:236-808-8748" className="inline-block">
                <Button
                  variant="outline"
                  className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 text-base px-8 py-6"
                >
                  Call Us: 236-808-8748
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
