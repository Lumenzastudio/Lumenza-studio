import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Zap, CheckCircle } from "lucide-react";

/**
 * How We Work Page - Organic Modernism Design
 * Explains workflow and collaboration approach
 */
export default function HowWeWork() {
  const collaborators = [
    { icon: "👷", label: "General Contractors" },
    { icon: "🏢", label: "Developers" },
    { icon: "🏠", label: "Homeowners" },
    { icon: "🔑", label: "Property Managers" },
    { icon: "🎨", label: "Designers & Architects" },
  ];

  const workflowSteps = [
    {
      title: "Consultation",
      description: "We discuss your project scope, timeline, and specific cleaning requirements to understand your needs.",
      icon: "💬",
    },
    {
      title: "Planning",
      description: "We develop a customized cleaning plan tailored to your project stage and schedule.",
      icon: "📋",
    },
    {
      title: "Execution",
      description: "Our team performs the cleaning according to the agreed-upon plan with attention to detail.",
      icon: "🧹",
    },
    {
      title: "Quality Check",
      description: "We conduct a thorough inspection to ensure all standards are met before final handover.",
      icon: "✅",
    },
    {
      title: "Feedback",
      description: "We welcome your feedback and are committed to continuous improvement.",
      icon: "💭",
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
              How We Work
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl animate-drop-in">
              Our flexible, collaborative approach ensures we deliver exactly what you need, when you need it.
            </p>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center animate-drop-in">
              We Collaborate With
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12 max-w-2xl mx-auto animate-drop-in">
              We work with a diverse range of clients to deliver tailored cleaning solutions
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {collaborators.map((collaborator, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all animate-drop-in scroll-trigger"
                >
                  <div className="text-4xl mb-3">{collaborator.icon}</div>
                  <p className="font-semibold text-foreground text-sm">{collaborator.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Description */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-foreground mb-8 text-center animate-drop-in">
                Our Flexible Workflow
              </h2>
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Our workflow is flexible and tailored to each project's stage — from concept to final handover. We adapt to timelines, project size, and client needs to ensure smooth execution.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Whether you need a single comprehensive cleaning session or multiple staged cleanings, we work around your schedule to minimize disruption and maximize efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center animate-drop-in">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="relative animate-drop-in scroll-trigger">
                  {/* Connector Line */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[60%] w-[calc(100%-60%)] h-0.5 bg-gradient-to-r from-primary to-accent/50"></div>
                  )}

                  {/* Card */}
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all relative z-10">
                    <div className="text-4xl mb-4 animate-icon-pulse">{step.icon}</div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Our Core Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <Users className="w-12 h-12 text-primary mb-4 animate-icon-pulse" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Collaboration
                </h3>
                <p className="text-foreground/70">
                  We work closely with you to understand your vision and deliver exactly what you need.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-soft">
                <Zap className="w-12 h-12 text-accent mb-4 animate-icon-pulse" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Efficiency
                </h3>
                <p className="text-foreground/70">
                  We optimize our processes to deliver results quickly without compromising quality.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-soft">
                <CheckCircle className="w-12 h-12 text-primary mb-4 animate-icon-pulse" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Excellence
                </h3>
                <p className="text-foreground/70">
                  Quality assurance and attention to detail are at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your project and see how we can help.
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
