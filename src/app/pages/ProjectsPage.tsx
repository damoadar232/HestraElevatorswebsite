import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { ProjectsSection } from "../components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <PageLayout title="Projects" description="Explore Hestra Elevators' portfolio of 500+ completed projects across commercial, residential, healthcare, hospitality, and government sectors."
      breadcrumbs={[{ label: "Projects" }]}>
      <PageHero label="Our Projects" title="A Portfolio Built on Trust"
        description="Landmark installations across India's most iconic buildings."
        image="photo-1460317442991-0ec209397118" />
      <ProjectsSection />
    </PageLayout>
  );
}
