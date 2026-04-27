import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

/**
 * Services Page - Organic Modernism Design
 * Detailed breakdown of three cleaning stages with visual hierarchy
 */
export default function Services() {
  const stages = [
    {
      title: "First Clean - Rough Clean",
      color: "bg-[#8b9d83]",
      items: [
        "Removal of debris, dust, labels, and protective coverings",
        "Initial cleaning of surfaces and openings",
        "Floor preparation and basic surface cleaning",
        "Removal of construction materials and waste",
      ],
    },
    {
      title: "Second Clean - Main Clean",
      color: "bg-[#d4a574]",
      items: [
        "Detailed cleaning of surfaces, cabinetry, and fixtures",
        "Window and frame cleaning throughout",
        "Dust removal from walls, trims, and millwork",
        "Floor cleaning and polishing",
        "Bathroom and kitchen deep cleaning",
      ],
    },
    {
      title: "Third Clean - Final Clean",
      color: "bg-[#c9a88a]",
      items: [
        "Final touch-ups after trades or deficiencies",
        "Glass and mirror cleaning and polishing",
        "Floor detailing and final presentation",
        "Quality assurance inspection",
        "Final walkthrough with client",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 animate-drop-in">
              Our Services
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl animate-drop-in">
              Lumenza provides professional post-construction and turnover cleaning services for builders, developers, and homeowners. Our services ensure spaces are clean, safe, and ready for occupancy.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16 scroll-trigger">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-drop-in">
                Multi-Stage Cleaning Structure
              </h2>
              <p className="text-lg text-foreground/70 animate-drop-in">
                Tailored to your project timeline and specific needs
              </p>
            </div>

            <div className="space-y-12">
              {stages.map((stage, idx) => (
                <div key={idx} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all animate-drop-in scroll-trigger">
                  <div className="flex flex-col md:flex-row">
                    {/* Color Bar */}
                    <div className={`${stage.color} w-full md:w-24 h-24 md:h-auto flex items-center justify-center`}>
                      <span className="text-white font-display font-bold text-4xl md:text-5xl opacity-20">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow p-8 md:p-12">
                      <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                        {stage.title}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stage.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 animate-icon-pulse" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Offering */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-foreground mb-8 text-center">
                Flexible Scheduling
              </h2>
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Consolidated Cleaning Sessions
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  For compressed schedules or fast unit turnover, we offer consolidated cleaning sessions that combine multiple stages into efficient, coordinated work. This approach is perfect for projects with tight timelines or rapid occupancy requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Accelerated project completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Reduced project timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Maintained quality standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Flexible scheduling to fit your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Illustration */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Visual Process Overview
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663501150731/Rz2pHNbVwJsEnWKozyoKwa/process-illustration-5hCuNGFPF99AQiMGrX4eVC.webp"
                alt="Three-stage cleaning process illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              Ready to Schedule Your Cleaning?
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a customized quote.
            </p>
            <a href="mailto:liz@lumenzastudio.ca" className="inline-block">
              <button className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-semibold px-8 py-3 rounded-lg transition-colors">
                Email Us
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
