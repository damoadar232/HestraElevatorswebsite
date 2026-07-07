import { HomeLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { IntroPreview } from "../components/sections/IntroPreview";
import { ProductsSection } from "../components/sections/ProductsSection";
import { WhyChooseSection } from "../components/sections/WhyChooseSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTASection } from "../components/sections/CTASection";

export default function HomePage() {
  return (
    <HomeLayout>
      <Hero />
      <Stats />
      <IntroPreview />
      <ProductsSection limit={4} showFilter={false} showViewAll />
      <WhyChooseSection />
      <ProjectsSection limit={3} showFilter={false} showViewAll />
      <TestimonialsSection />
      <CTASection />
    </HomeLayout>
  );
}
