import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Same-Day Service Available</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            When Your Home Stops,{" "}
            <span className="text-primary">We Start.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Fast, reliable appliance repair for washing machines, refrigerators, ACs, microwaves & dryers. Expert technicians at your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="tel:+919876543210">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now: +91-9876543210
              </Button>
            </a>
            <Link to="/services">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                View Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Expert Technicians" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
