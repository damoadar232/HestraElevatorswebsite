import { CheckCircle } from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { CertificationsSection } from "../components/sections/CertificationsSection";
import { InstallationTimeline } from "../components/sections/InstallationTimeline";
import { VALUES, LEADERSHIP } from "../data/content";
import { A, PP, IN, FadeUp, Label } from "../shared/ui";

export default function AboutPage() {
  return (
    <PageLayout title="About Us" description="Learn about Hestra Elevators — 15+ years of engineering excellence, ISO-certified manufacturing, and 500+ installations across India."
      breadcrumbs={[{ label: "About Us" }]}>
      <PageHero label="About Us" title="Engineering Trust, Floor by Floor"
        description="India's trusted partner for elevator manufacturing, installation, and lifecycle maintenance since 2009."
        image="photo-1504307651254-35680f356dfd" />

      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <Label text="Our Story" />
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#111111", ...PP }}>15 Years of Vertical Transportation Excellence</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-4" style={IN}>
              Founded in 2009, Hestra Elevators has grown from a regional installer into one of India's most trusted
              elevator engineering companies. With a state-of-the-art manufacturing facility, ISO 9001:2015 certified
              quality system, and a nationwide service network, we deliver solutions that combine precision engineering
              with deep local expertise.
            </p>
            <p className="text-[#5F5F5F] leading-relaxed" style={IN}>
              Our portfolio spans luxury residential towers, corporate campuses, hospitals, metro stations, and
              government complexes — each backed by comprehensive AMC and genuine OEM parts.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format"
              alt="Hestra manufacturing" className="w-full h-[420px] object-cover rounded-sm" loading="lazy" />
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", desc: "To deliver safe, reliable, and energy-efficient vertical transportation solutions that elevate the quality of life in every building we serve." },
            { title: "Our Vision", desc: "To be India's most trusted elevator engineering company, recognized globally for innovation, safety, and customer partnership." },
            { title: "Engineering Excellence", desc: "Precision German engineering principles combined with Indian manufacturing agility — every component tested, every installation certified." },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className="border border-[#E5E5E5] rounded-sm p-8 h-full hover:border-[#2F5D7C]/30 transition-colors">
                <h3 className="font-bold text-lg mb-4" style={{ color: A, ...PP }}>{item.title}</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed" style={IN}>{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-14">
            <Label text="Our Values" />
            <h2 className="text-3xl font-bold" style={{ color: "#111111", ...PP }}>What Drives Us</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-[#E5E5E5] p-6 rounded-sm h-full">
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#111111", ...PP }}>{v.title}</h3>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed" style={IN}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-14">
            <Label text="Leadership" />
            <h2 className="text-3xl font-bold" style={{ color: "#111111", ...PP }}>Meet Our Leadership Team</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((l, i) => (
              <FadeUp key={l.name} delay={i * 0.08}>
                <div className="border border-[#E5E5E5] rounded-sm p-6 text-center hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold" style={{ background: A, ...PP }}>
                    {l.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#111111", ...PP }}>{l.name}</h3>
                  <div className="text-xs mb-3" style={{ color: A, ...IN }}>{l.role}</div>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed" style={IN}>{l.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <Label text="Manufacturing" />
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#111111", ...PP }}>ISO-Certified Manufacturing Facility</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6" style={IN}>
              Our Gurugram manufacturing facility produces precision elevator assemblies — guide rails, counterweights,
              car frames, door systems, and control panels — with in-process quality checks at every stage.
            </p>
            {["CNC machining for guide rails", "In-house controller programming", "Load testing before dispatch", "Pan-India logistics network"].map(f => (
              <div key={f} className="flex items-center gap-3 mb-3">
                <CheckCircle size={15} style={{ color: A }} />
                <span className="text-sm text-[#5F5F5F]" style={IN}>{f}</span>
              </div>
            ))}
          </FadeUp>
          <FadeUp delay={0.15}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format"
              alt="Manufacturing facility" className="w-full h-[400px] object-cover rounded-sm" loading="lazy" />
          </FadeUp>
        </div>
      </section>

      <CertificationsSection />
      <InstallationTimeline />
    </PageLayout>
  );
}
