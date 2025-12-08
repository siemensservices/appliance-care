import { Shield, Clock, IndianRupee, Award } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience in appliance repair.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Same-day service available. We value your time and convenience.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. Get upfront quotes before any work begins.",
  },
  {
    icon: Shield,
    title: "All Brands Supported",
    description: "We repair all Indian and imported brands with genuine parts.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Homes Trust Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've built our reputation on reliability, quality, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
