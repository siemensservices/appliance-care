import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Thermometer, Wind, Zap, Shirt } from "lucide-react";

const services = [
  {
    icon: Droplets,
    problem: "Laundry stuck?",
    title: "Washing Machine Repair",
    description: "From not spinning to leaking, we fix all washing machine issues quickly.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Thermometer,
    problem: "Fridge not cooling?",
    title: "Refrigerator Repair",
    description: "Keep your food fresh. We handle all fridge and freezer problems.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Wind,
    problem: "AC blowing hot air?",
    title: "AC Service",
    description: "Beat the heat with our comprehensive AC repair and maintenance.",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: Zap,
    problem: "Microwave not heating?",
    title: "Microwave Repair",
    description: "Quick fixes for all microwave brands - sparks, no heat, display issues.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Shirt,
    problem: "Clothes not drying?",
    title: "Dryer Repair",
    description: "Get your dryer back to perfect condition with our expert service.",
    color: "bg-rose-500/10 text-rose-600",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Troubling Your Appliance?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your problem and we'll get it fixed. Fast diagnosis, transparent pricing, and expert repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <p className="text-sm font-medium text-primary mb-2">{service.problem}</p>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
