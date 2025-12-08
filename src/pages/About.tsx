import Layout from "@/components/layout/Layout";
import { CheckCircle2, Users, Clock, Award, Wrench } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">AppliancesHelp</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for professional appliance repair services across India. 
              We bring expertise, reliability, and care to every home we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2008, AppliancesHelp started with a simple mission: to provide 
                honest, reliable, and affordable appliance repair services to every household.
              </p>
              <p className="text-muted-foreground mb-4">
                What began as a small team of passionate technicians has grown into a 
                network of 50+ certified experts serving thousands of happy customers 
                across major cities in India.
              </p>
              <p className="text-muted-foreground">
                We believe that every home deserves working appliances, and we're committed 
                to making repairs accessible, transparent, and hassle-free.
              </p>
            </div>
            <div className="bg-muted rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: "10,000+", label: "Happy Customers" },
                  { icon: Clock, value: "15+", label: "Years Experience" },
                  { icon: Award, value: "50+", label: "Expert Technicians" },
                  { icon: Wrench, value: "25,000+", label: "Repairs Completed" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliances We Repair */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Appliances We Repair
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're experts in repairing all major Indian and imported appliance brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Washing Machines",
              "Refrigerators",
              "Air Conditioners",
              "Microwaves",
              "Dryers",
              "Dishwashers",
              "Water Heaters",
              "Chimneys",
              "Ovens",
              "Cooktops",
            ].map((appliance) => (
              <div
                key={appliance}
                className="bg-card rounded-xl p-4 text-center border border-border/50 hover:border-primary/30 hover:shadow-card transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground">{appliance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Brands We Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From premium international brands to popular Indian manufacturers, we service them all.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Samsung",
              "LG",
              "Whirlpool",
              "Bosch",
              "IFB",
              "Godrej",
              "Haier",
              "Voltas",
              "Blue Star",
              "Daikin",
              "Hitachi",
              "Panasonic",
            ].map((brand) => (
              <div
                key={brand}
                className="px-6 py-3 bg-muted rounded-full text-foreground font-medium"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
