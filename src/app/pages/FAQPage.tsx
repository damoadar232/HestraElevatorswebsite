import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { FAQSection } from "../components/sections/FAQSection";
import { CTASection } from "../components/sections/CTASection";

export default function FAQPage() {
  return (
    <PageLayout title="FAQ" description="Frequently asked questions about Hestra Elevators — installation timelines, AMC coverage, safety compliance, modernization, and residential solutions."
      breadcrumbs={[{ label: "FAQ" }]}>
      <PageHero label="FAQ" title="Questions? We Have Answers."
        description="Everything you need to know about our elevators, services, and maintenance plans." />
      <FAQSection />
      <CTASection />
    </PageLayout>
  );
}
