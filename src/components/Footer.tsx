import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Footer Component - Organic Modernism Design
 * Soft sage green background, warm sand accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Lumenza</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Professional post-construction and turnover cleaning services serving Canada with precision and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/how-we-work">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">How We Work</a>
                </Link>
              </li>
              <li>
                <Link href="/areas">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">Service Areas</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:236-808-8748"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                236-808-8748
              </a>
              <a
                href="mailto:liz@lumenzastudio.ca"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                liz@lumenzastudio.ca
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {currentYear} Lumenza Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
