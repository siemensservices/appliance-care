import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import washingMachineImage from "@/assets/washing-machine-hero.jpg";

const Hero = () => {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Working Hours Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6 animate-fade-in">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Working Time: 24×7</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Professional Washing Machine
              <br />
              <span className="text-primary">Repair & Service</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-100">
              At SIEMENS, we understand how inconvenient a faulty washing machine can be. 
              Our skilled technicians have years of experience working with all types and brands of washing machines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up delay-200">
              <a href="tel:7710074028">
                <Button variant="default" size="lg" className="gap-2 text-base px-6 md:px-8 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Need urgent service? Call 7710074028
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 animate-fade-in delay-300">
              {[
                { icon: Clock, label: "30 Min Response" },
                { icon: Shield, label: "90-Day Warranty" },
                { icon: CheckCircle2, label: "Genuine Parts" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={washingMachineImage}
                alt="Professional washing machine repair service"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg hidden sm:block">
                <p className="text-sm font-semibold">24×7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;