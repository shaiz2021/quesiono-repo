import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyQuesiono } from "@/components/sections/WhyQuesiono";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsStrip } from "@/components/sections/ProductsStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesPreview />
      <FeaturedWork />
      <WhyQuesiono />
      <ProcessSection />
      <ProductsStrip />
      <TestimonialsSection />
      <CTABanner
        title="Ready to Build Something That Works?"
        subtitle="Let's discuss your project and see how we can help you grow online."
      />
    </>
  );
}
