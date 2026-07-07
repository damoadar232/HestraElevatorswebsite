import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { ServicesSubNav } from "../components/layout/ServicesSubNav";
import { ProductsSection } from "../components/sections/ProductsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { IndustriesSection } from "../components/sections/IndustriesSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { InstallationTimeline } from "../components/sections/InstallationTimeline";

export default function ServicesPage() {
  return (
    <PageLayout
      title="Services"
      description="Hestra Elevators — complete elevator products, engineering services, industry solutions, and project portfolio under one roof."
      breadcrumbs={[{ label: "Services" }]}
    >
      <PageHero
        label="Our Services"
        title="Products, Services & Solutions"
        description="Explore our complete range of elevator products, engineering services, industry expertise, and landmark project installations."
        image="photo-1545324418-cc1a3fa10c00"
      />
      <ServicesSubNav />
      <ProductsSection sectionId="products" />
      <ServicesSection sectionId="our-services" />
      <IndustriesSection detailed sectionId="industries" />
      <ProjectsSection sectionId="projects" />
      <InstallationTimeline />
    </PageLayout>
  );
}
