import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { ProductsSection } from "../components/sections/ProductsSection";

export default function ProductsPage() {
  return (
    <PageLayout title="Products" description="Explore Hestra Elevators' complete range — passenger, home, hospital, freight, capsule, MRL, hydraulic, and goods lifts."
      breadcrumbs={[{ label: "Products" }]}>
      <PageHero label="Our Products" title="Elevator Solutions for Every Application"
        description="Precision-engineered, safety-certified elevators tailored to your building's unique requirements."
        image="photo-1558618666-fcd25c85cd64" />
      <ProductsSection />
    </PageLayout>
  );
}
