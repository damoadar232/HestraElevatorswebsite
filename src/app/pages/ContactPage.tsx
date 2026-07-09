import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { ContactSection } from "../components/sections/ContactSection";
import { COMPANY_CONTACT } from "../data/content";
import { FadeUp } from "../shared/ui";

export default function ContactPage() {
  return (
    <PageLayout title="Contact" description={`Contact Hestra Elevators — head office in Hyderabad, 24×7 emergency support, sales enquiries, and project consultations.`}
      breadcrumbs={[{ label: "Contact" }]}>
      <PageHero label="Contact Us" title="Let's Elevate Your Building"
        description="Our engineering team responds within one business day."
        image="photo-1486325212027-8081e485255e" />

      <section className="py-12 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <div className="rounded-sm overflow-hidden border border-[#E5E5E5] h-80 bg-[#E5E5E5]">
              <iframe
                title="Hestra Elevators office location"
                src={COMPANY_CONTACT.mapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </PageLayout>
  );
}
