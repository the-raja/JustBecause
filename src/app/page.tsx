import Hero from "@/components/Hero";
import ProductExplainer from "@/components/ProductExplainer";
import FeaturedTemplates from "@/components/FeaturedTemplates";
import HowItWorks from "@/components/HowItWorks";
import CustomTeaser from "@/components/CustomTeaser";
import QuickPricingHighlights from "@/components/QuickPricingHighlights";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductExplainer />
      <FeaturedTemplates />
      <HowItWorks showPolicy={false} />
      <CustomTeaser />
      <QuickPricingHighlights />
      <FinalCTA />
    </main>
  );
}
