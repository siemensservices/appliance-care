import { useState } from "react";
import { Phone, Droplets, Thermometer, Wind, Zap, Shirt, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const appliances = [
  {
    id: "washing",
    icon: Droplets,
    name: "Washing Machine",
    tips: [
      "Check if the door is properly closed",
      "Ensure the water supply is turned on",
      "Clean the filter regularly",
      "Don't overload the machine",
    ],
  },
  {
    id: "fridge",
    icon: Thermometer,
    name: "Refrigerator",
    tips: [
      "Check if the thermostat is set correctly",
      "Ensure the door seal is intact",
      "Clean the condenser coils",
      "Keep the fridge away from heat sources",
    ],
  },
  {
    id: "ac",
    icon: Wind,
    name: "Air Conditioner",
    tips: [
      "Clean or replace the air filter",
      "Check if the outdoor unit is clear",
      "Ensure thermostat batteries are fresh",
      "Keep curtains closed during peak heat",
    ],
  },
  {
    id: "microwave",
    icon: Zap,
    name: "Microwave",
    tips: [
      "Check if the door latch is working",
      "Clean the interior regularly",
      "Don't use metal containers",
      "Check the power cord for damage",
    ],
  },
  {
    id: "dryer",
    icon: Shirt,
    name: "Dryer",
    tips: [
      "Clean the lint filter after each use",
      "Check the exhaust vent for blockages",
      "Don't overload the dryer",
      "Ensure proper ventilation",
    ],
  },
];

const ApplianceWidget = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedAppliance = appliances.find((a) => a.id === selected);

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Which Appliance is Troubling You?
            </h2>
            <p className="text-muted-foreground">
              Select your appliance to get quick tips and instant support.
            </p>
          </div>

          {/* Appliance selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {appliances.map((appliance) => (
              <button
                key={appliance.id}
                onClick={() => setSelected(appliance.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selected === appliance.id
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <appliance.icon className="w-5 h-5" />
                {appliance.name}
              </button>
            ))}
          </div>

          {/* Tips display */}
          {selectedAppliance && (
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 animate-scale-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <selectedAppliance.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {selectedAppliance.name} Tips
                  </h3>
                  <p className="text-sm text-muted-foreground">Try these before calling</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {selectedAppliance.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm flex-1">
                  Still having issues? Our experts are ready to help!
                </p>
                <a href="tel:+919876543210">
                  <Button variant="hero" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplianceWidget;
