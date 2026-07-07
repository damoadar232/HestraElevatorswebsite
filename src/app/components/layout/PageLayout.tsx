import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { PageTransition } from "./PageTransition";
import { usePageSEO } from "./SEO";
import { IN } from "../../shared/ui";

export function PageLayout({
  children,
  title,
  description,
  breadcrumbs,
  showBreadcrumbs = true,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  showBreadcrumbs?: boolean;
}) {
  usePageSEO(title, description);
  const isHome = title === "Home";

  return (
    <div className="bg-[#F7F7F7] text-[#111111] min-h-screen" style={IN}>
      <Navbar />
      <main id="main-content">
        {showBreadcrumbs && !isHome && breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export function HomeLayout({ children }: { children: React.ReactNode }) {
  usePageSEO("Home", "Hestra Elevators — world-class elevator manufacturing, installation, modernization, and AMC services across India.");
  return (
    <div className="bg-[#F7F7F7] text-[#111111] min-h-screen" style={IN}>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
