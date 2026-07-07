import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { A, PP, IN, FadeUp, Btn } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", building: "", message: "" });

  return (
    <section className="py-24 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionHeader label="Contact Us" title="Let's Elevate Your Building"
            description="Tell us about your project. Our engineering team will respond within one business day." />
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          <FadeUp>
            <form className="bg-white border border-[#E5E5E5] rounded-sm p-8" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Rajesh Kumar" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "rajesh@company.com" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                  { key: "building", label: "Building Type", type: "text", placeholder: "Commercial Tower / Hospital..." },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "#5F5F5F", ...IN }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E5E5E5] rounded-sm text-sm focus:outline-none focus:border-[#2F5D7C] transition-colors"
                      style={{ color: "#111111", ...IN }} />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "#5F5F5F", ...IN }}>Message</label>
                <textarea rows={4} placeholder="Describe your project requirements..."
                  value={form.message} onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E5E5E5] rounded-sm text-sm focus:outline-none focus:border-[#2F5D7C] transition-colors resize-none"
                  style={{ color: "#111111", ...IN }} />
              </div>
              <Btn variant="solid" type="submit" className="w-full justify-center !py-4">
                Send Enquiry <Send size={15} />
              </Btn>
            </form>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, title: "Head Office", lines: ["Hestra Elevators Pvt. Ltd.", "Sector 44, Gurugram — 122003", "Haryana, India"] },
                { icon: Phone, title: "Phone & WhatsApp", lines: ["+91 98765 43210", "+91 11 4567 8900"] },
                { icon: Mail, title: "Email", lines: ["sales@hestraelevators.com", "support@hestraelevators.com"] },
                { icon: Clock, title: "Business Hours", lines: ["Mon–Sat: 9:00 AM – 6:00 PM", "Emergency: 24 × 7"] },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white border border-[#E5E5E5] rounded-sm p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0" style={{ background: "#EEF4F8" }}>
                      <Icon size={18} style={{ color: A }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-2" style={{ color: "#111111", ...PP }}>{item.title}</div>
                      {item.lines.map(l => <div key={l} className="text-xs text-[#5F5F5F]" style={IN}>{l}</div>)}
                    </div>
                  </div>
                );
              })}

              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white rounded-sm hover:opacity-90 transition-all"
                style={{ background: "#25D366", ...IN }}>
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>

              <div className="bg-[#2F5D7C] text-white rounded-sm p-6">
                <div className="font-bold text-base mb-2" style={PP}>Emergency Breakdown?</div>
                <p className="text-white/75 text-sm mb-4" style={IN}>24 × 7 emergency team for trapped passenger rescue and critical breakdowns.</p>
                <div className="flex items-center gap-2 font-bold text-lg" style={PP}><Phone size={18} /> 1800-XXX-XXXX</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
