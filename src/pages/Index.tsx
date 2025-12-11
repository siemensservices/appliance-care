import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HomeContactForm from "@/components/home/HomeContactForm";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingCards from "@/components/home/PricingCards";
import OtherServices from "@/components/home/OtherServices";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HomeContactForm />
      <WhyChooseUs />
      <PricingCards />
      <OtherServices />
      <CTASection />
    </Layout>
  );
};

export default Index;