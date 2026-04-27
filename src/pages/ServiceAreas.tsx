import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

/**
 * Service Areas Page - Organic Modernism Design
 * Shows coverage area across Canada
 */
export default function ServiceAreas() {
  const areas = [
    "Alberta",
    "British Columbia",
    "Ontario",
    "Quebec",
    "Manitoba",
    "Other provinces",
  ];

  const serviceDetails = [
    {
      title: "Comprehensive Coverage",
      description: "We serve across Canada with consistent quality and reliability.",
    },
    {
      title: "Local Expertise",
      description: "Deep knowledge of local construction standards and client expectations.",
    },
    {
      title: "Quick Response",
      description: "Efficient scheduling and rapid deployment to meet your project timeline.",
    },
    {
      title: "Flexible Scheduling",
      description: "Accommodating service times to fit your construction schedule.",
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
              Service Areas
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl animate-drop-in">
              Serving all of Canada with professional post-construction cleaning services
            </p>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square flex items-center justify-center shadow-soft">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground/60 font-semibold">Canada Coverage Area</p>
                </div>
              </div>

              {/* Service Areas List */}
              <div>
                <h2 className="font-display text-4xl font-bold text-foreground mb-8 animate-drop-in">
                  We Serve
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {areas.map((area, idx) => (
                    <div
                      key={idx}
                      className="bg-card rounded-lg p-4 shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all flex items-center gap-3 animate-drop-in scroll-trigger"
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/70 text-lg">
                  If your project is in Canada and you don't see your specific province listed, please contact us. We may be able to accommodate special requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center animate-drop-in">
              Why Choose Lumenza for Your Area
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceDetails.map((detail, idx) => (
                <div key={idx} className="bg-card rounded-xl p-8 shadow-soft animate-drop-in scroll-trigger">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary animate-icon-pulse" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-foreground/70">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Service Area Questions */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 shadow-soft">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Service Area Questions?
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                If you're unsure whether your location is within our service area, or if you have a special project request, please don't hesitate to reach out. We're happy to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:236-808-8748" className="inline-block">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
                    Call: 236-808-8748
                  </button>
                </a>
                <a href="mailto:liz@lumenzastudio.ca" className="inline-block">
                  <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
                    Email Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              Ready to Schedule Your Project?
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your cleaning needs and get a quote.
            </p>
            <a href="mailto:liz@lumenzastudio.ca" className="inline-block">
              <button className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-semibold px-8 py-3 rounded-lg transition-colors">
                Request a Quote
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
