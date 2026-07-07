import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { GallerySection } from "../components/sections/GallerySection";

export default function GalleryPage() {
  return (
    <PageLayout title="Gallery" description="Browse Hestra Elevators' project gallery — premium installations across commercial, residential, healthcare, and hospitality sectors."
      breadcrumbs={[{ label: "Gallery" }]}>
      <PageHero label="Project Gallery" title="Our Work in Pictures"
        description="Premium elevator installations that define architectural excellence."
        image="photo-1555529669-e69e7aa0ba9a" />
      <GallerySection />
    </PageLayout>
  );
}
