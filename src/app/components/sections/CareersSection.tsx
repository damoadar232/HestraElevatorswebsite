import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { JOB_OPENINGS, CAREER_BENEFITS } from "../../data/content";
import { A, PP, IN, FadeUp, Btn } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function CareersSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", resume: "", message: "" });

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <SectionHeader label="Join Our Team" title="Build Your Career at Hestra" center={false}
              description="Join 500+ professionals engineering India's vertical transportation future." />
            <div className="flex flex-col gap-3">
              {CAREER_BENEFITS.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: A }} />
                  <span className="text-sm text-[#5F5F5F]" style={IN}>{b}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format"
              alt="Hestra team" className="w-full h-[400px] object-cover rounded-sm" loading="lazy" />
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-12"><SectionHeader label="Open Positions" title="Current Job Openings" /></FadeUp>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {JOB_OPENINGS.map((job, i) => (
              <FadeUp key={job.title} delay={i * 0.06}>
                <div className="bg-white border border-[#E5E5E5] rounded-sm p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-base" style={{ color: "#111111", ...PP }}>{job.title}</h3>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-sm" style={{ background: "#EEF4F8", color: A, ...IN }}>{job.type}</span>
                  </div>
                  <div className="text-xs text-[#8B8B8B] mb-3" style={IN}>{job.dept} · {job.location}</div>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed" style={IN}>{job.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="bg-white border border-[#E5E5E5] rounded-sm p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-6 text-center" style={{ color: "#111111", ...PP }}>Apply Now</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: "name", label: "Full Name", type: "text" },
                    { key: "email", label: "Email", type: "email" },
                    { key: "phone", label: "Phone", type: "tel" },
                    { key: "position", label: "Position Applied", type: "text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-semibold mb-2" style={{ color: "#5F5F5F", ...IN }}>{f.label}</label>
                      <input type={f.type} value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E5E5E5] rounded-sm text-sm focus:outline-none focus:border-[#2F5D7C]"
                        style={{ color: "#111111", ...IN }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#5F5F5F", ...IN }}>Cover Letter</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E5E5E5] rounded-sm text-sm focus:outline-none focus:border-[#2F5D7C] resize-none"
                    style={{ color: "#111111", ...IN }} />
                </div>
                <Btn variant="solid" type="submit" className="w-full justify-center !py-4">
                  Submit Application <Send size={15} />
                </Btn>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
