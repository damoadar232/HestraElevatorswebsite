import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { BlogSection } from "../components/sections/BlogSection";

export default function BlogPage() {
  return (
    <PageLayout title="Blog" description="Hestra Elevators blog — maintenance tips, safety awareness, elevator technology updates, and industry insights."
      breadcrumbs={[{ label: "Blog" }]}>
      <PageHero label="Insights & News" title="From the Hestra Blog"
        description="Expert perspectives on elevator safety, technology, and industry trends."
        image="photo-1545324418-cc1a3fa10c00" />
      <BlogSection />
    </PageLayout>
  );
}
