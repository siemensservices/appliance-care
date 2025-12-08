import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Droplets, Thermometer, Wind, Zap, Shirt, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Washing Machine Repair",
    description: "Expert washing machine repair service for all brands including Samsung, LG, Whirlpool, IFB, and Bosch. We fix front-load, top-load, and semi-automatic machines.",
    issues: [
      "Not spinning or agitating",
      "Water not draining",
      "Leaking water",
      "Strange noises during operation",
      "Door won't open or close",
      "Not starting or no power",
      "Drum not rotating",
      "Error codes on display",
    ],
    keywords: "washing machine repair near me, washer repair service, laundry machine technician",
  },
  {
    icon: Thermometer,
    title: "Refrigerator Repair",
    description: "Professional refrigerator and freezer repair for single-door, double-door, side-by-side, and French door models. All major brands serviced with genuine parts.",
    issues: [
      "Not cooling properly",
      "Freezer not freezing",
      "Making loud noises",
      "Ice maker not working",
      "Water leaking inside/outside",
      "Frost buildup",
      "Compressor issues",
      "Door seal problems",
    ],
    keywords: "fridge repair, refrigerator technician, freezer repair service",
  },
  {
    icon: Wind,
    title: "AC Service & Repair",
    description: "Complete air conditioner service including installation, repair, and maintenance. We handle split AC, window AC, and central air conditioning systems.",
    issues: [
      "Not cooling effectively",
      "Blowing warm air",
      "Water dripping inside",
      "Strange odors",
      "Unusual sounds",
      "Remote not working",
      "Gas refilling required",
      "Regular maintenance & cleaning",
    ],
    keywords: "AC repair near me, air conditioner service, AC installation, AC gas refilling",
  },
  {
    icon: Zap,
    title: "Microwave Repair",
    description: "Quick microwave oven repair for all types - solo, grill, and convection. We service Samsung, LG, IFB, Panasonic, and other popular brands.",
    issues: [
      "Not heating food",
      "Sparking inside",
      "Turntable not rotating",
      "Display not working",
      "Buttons unresponsive",
      "Door won't close properly",
      "Unusual burning smell",
      "Timer issues",
    ],
    keywords: "microwave repair, oven repair service, microwave technician near me",
  },
  {
    icon: Shirt,
    title: "Dryer Repair",
    description: "Professional dryer repair service for vented, condenser, and heat pump dryers. We fix all brands and ensure your clothes dry perfectly every time.",
    issues: [
      "Not drying clothes properly",
      "Not turning on",
      "Overheating",
      "Making squeaking noises",
      "Drum not tumbling",
      "Lint filter issues",
      "Taking too long to dry",
      "Bad odors",
    ],
    keywords: "dryer repair near me, clothes dryer service, tumble dryer technician",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Professional appliance repair services for your home. Fast diagnosis, 
              transparent pricing, and expert technicians at your doorstep.
            </p>
            <a href="tel:+919876543210">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                Book a Service: +91-9876543210
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <a href="tel:+919876543210">
                    <Button variant="default" className="gap-2">
                      <Phone className="w-4 h-4" />
                      Get Help Now
                    </Button>
                  </a>
                </div>

                <div className={`bg-muted rounded-2xl p-6 md:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-semibold text-foreground mb-4">Common Issues We Fix:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.issues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Emergency Repair?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our technicians are available 7 days a week. Get same-day service for urgent repairs.
          </p>
          <a href="tel:+919876543210">
            <Button variant="hero-outline" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Phone className="w-5 h-5" />
              Call Now: +91-9876543210
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
