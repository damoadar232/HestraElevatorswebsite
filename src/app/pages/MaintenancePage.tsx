import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { AMCPlansSection } from "../components/sections/AMCPlansSection";
import { CTASection } from "../components/sections/CTASection";

export default function MaintenancePage() {
  return (
    <PageLayout title="Maintenance & AMC" description="Annual Maintenance Contracts and preventive care plans — Essential, Professional, and Enterprise tiers with 24×7 emergency support."
      breadcrumbs={[{ label: "Maintenance" }]}>
      <PageHero label="Maintenance & AMC" title="Plans Built Around Your Building"
        description="Structured maintenance contracts that keep your elevators running safely and efficiently."
        image="photo-1558618666-fcd25c85cd64" />
      <AMCPlansSection showBenefits />
      <CTASection />
    </PageLayout>
  );
}
