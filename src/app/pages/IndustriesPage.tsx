import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { IndustriesSection } from "../components/sections/IndustriesSection";

export default function IndustriesPage() {
  return (
    <PageLayout title="Industries" description="Hestra Elevators serves residential, commercial, healthcare, hospitality, retail, aviation, education, industrial, and government sectors across India."
      breadcrumbs={[{ label: "Industries" }]}>
      <PageHero label="Industries We Serve" title="Built for Every Sector"
        description="Elevator solutions engineered for the unique demands of each industry vertical."
        image="photo-1486325212027-8081e485255e" />
      <IndustriesSection detailed />
    </PageLayout>
  );
}
