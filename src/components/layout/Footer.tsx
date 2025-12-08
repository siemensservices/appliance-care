import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">
                Appliances<span className="text-primary">Help</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner for all appliance repairs. Fast, reliable, and affordable service for your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Washing Machine Repair",
                "Refrigerator Repair",
                "AC Service",
                "Microwave Repair",
                "Dryer Repair",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Call Us</p>
                  <a href="tel:+919876543210" className="font-medium hover:text-primary transition-colors">
                    +91-9876543210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Email Us</p>
                  <a href="mailto:support@applianceshelp.com" className="font-medium hover:text-primary transition-colors">
                    support@applianceshelp.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Visit Us</p>
                  <p className="font-medium">123 Service Road, Mumbai</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} AppliancesHelp. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
