import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to get your appliance fixed? Reach out to us and we'll be there to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need to book a service? We're here to help you 7 days a week.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91-9876543210
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:support@applianceshelp.com" className="text-muted-foreground hover:text-primary transition-colors">
                      support@applianceshelp.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Service Road, Andheri West<br />
                      Mumbai, Maharashtra 400058
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-sm text-accent font-medium mt-1">
                      Same-day service available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form Embed */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Book a Service</h2>
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdDEBWpzYbqLGHj8pW8bxmxK6JWEC7Y7c-3ej5j8A9qQvR8tw/viewform?embedded=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Service Request Form"
                >
                  Loading form...
                </iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Or call us directly at <a href="tel:+919876543210" className="text-primary font-medium">+91-9876543210</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                We serve across Mumbai and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
