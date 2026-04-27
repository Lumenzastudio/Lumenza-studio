import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/**
 * Contact Page - Organic Modernism Design
 * Contact form and contact information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success("Thank you for your inquiry! We'll be in touch soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "236-808-8748",
      href: "tel:236-808-8748",
    },
    {
      icon: Mail,
      label: "Email",
      value: "liz@lumenzastudio.ca",
      href: "mailto:liz@lumenzastudio.ca",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Canada",
      href: "#",
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
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl animate-drop-in">
              Have questions about our services? Ready to request a quote? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className="bg-card rounded-xl p-8 shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all text-center group animate-drop-in scroll-trigger"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform animate-icon-pulse" />
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {info.label}
                    </h3>
                    <p className="text-foreground/70 font-medium">{info.value}</p>
                  </a>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-card rounded-2xl p-8 shadow-soft animate-drop-in scroll-trigger">
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>

              {/* Info Section */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Why Contact Us?
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Whether you're a contractor, developer, homeowner, or property manager, we're here to help. Our team will work with you to understand your specific needs and provide a customized quote for your project.
                  </p>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    What to Include in Your Message
                  </h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Project location and type</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Approximate square footage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Desired cleaning stage(s)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Timeline and any special requirements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 rounded-xl p-6">
                  <p className="text-foreground font-semibold mb-2">Quick Response</p>
                  <p className="text-foreground/70">
                    We typically respond to all inquiries within 24 hours. For urgent requests, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              Prefer to Call?
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Give us a call and speak directly with our team about your project.
            </p>
            <a href="tel:236-808-8748" className="inline-block">
              <button className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-semibold px-8 py-3 rounded-lg transition-colors">
                Call: 236-808-8748
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
