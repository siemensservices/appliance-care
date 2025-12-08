import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We currently serve Mumbai and all surrounding areas including Thane, Navi Mumbai, and Kalyan-Dombivli. We're expanding to more cities soon!",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We offer same-day service for most repair requests. Call us before 2 PM for same-day appointments. Emergency repairs are also available.",
  },
  {
    question: "What brands do you repair?",
    answer: "We repair all major Indian and international brands including Samsung, LG, Whirlpool, Bosch, IFB, Godrej, Haier, Voltas, Daikin, Hitachi, and many more.",
  },
  {
    question: "How much does a repair cost?",
    answer: "Repair costs vary depending on the appliance and issue. We provide free estimates before starting any work. Our service call fee is ₹199, which is waived if you proceed with the repair.",
  },
  {
    question: "Do you use genuine parts?",
    answer: "Yes, we use only genuine spare parts from authorized suppliers. This ensures the longevity of your repair and maintains your appliance's warranty where applicable.",
  },
  {
    question: "Is there a warranty on repairs?",
    answer: "Absolutely! We offer a 90-day warranty on all repair work and spare parts. If the same issue occurs within this period, we'll fix it at no extra cost.",
  },
  {
    question: "How can I book a service?",
    answer: "You can book a service by calling us at +91-9876543210, filling out our online form on the Contact page, or using the chatbot on our website. We'll confirm your appointment within 30 minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and bank transfers. Payment is due after the repair is completed to your satisfaction.",
  },
  {
    question: "Can you repair appliances that are out of warranty?",
    answer: "Yes! We repair appliances regardless of warranty status. Our technicians are trained to work on both in-warranty and out-of-warranty appliances.",
  },
  {
    question: "What if my appliance can't be repaired?",
    answer: "If your appliance is beyond repair, we'll be upfront about it. We'll only charge the service call fee and can provide recommendations for replacement options if needed.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our appliance repair services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-card transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions */}
            <div className="mt-12 text-center bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help!
              </p>
              <a href="tel:+919876543210">
                <Button variant="hero" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us: +91-9876543210
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
