import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { SafetySection } from "../components/sections/SafetySection";
import { CertificationsSection } from "../components/sections/CertificationsSection";
import { AMCPlansSection } from "../components/sections/AMCPlansSection";
import { CTASection } from "../components/sections/CTASection";

export default function SafetyPage() {
  return (
    <PageLayout
      title="Safety"
      description="Hestra Elevators safety standards, quality assurance, testing procedures, preventive maintenance, AMC plans, and 24×7 emergency support."
      breadcrumbs={[{ label: "Safety" }]}
    >
      <PageHero
        label="Safety & Maintenance"
        title="Safety Is Not a Feature. It's Our Foundation."
        description="Comprehensive safety protocols, quality inspection processes, and structured maintenance plans for long-term reliability."
        image="photo-1504307651254-35680f356dfd"
      />
      <SafetySection showQuality sectionId="safety-standards" />
      <CertificationsSection />
      <AMCPlansSection showBenefits sectionId="maintenance-amc" />
      <CTASection />
    </PageLayout>
  );
}
