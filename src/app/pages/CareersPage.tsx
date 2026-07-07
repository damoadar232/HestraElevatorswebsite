import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { CareersSection } from "../components/sections/CareersSection";

export default function CareersPage() {
  return (
    <PageLayout title="Careers" description="Join Hestra Elevators — explore career opportunities in engineering, installation, maintenance, sales, and manufacturing across India."
      breadcrumbs={[{ label: "Careers" }]}>
      <PageHero label="Careers" title="Build Your Career at Hestra"
        description="Join 500+ professionals engineering India's vertical transportation future."
        image="photo-1504307651254-35680f356dfd" />
      <CareersSection />
    </PageLayout>
  );
}
