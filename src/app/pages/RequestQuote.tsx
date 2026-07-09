import { useState, FormEvent } from "react";
import {
  Send, RotateCcw, CheckCircle, ClipboardList, Search, MapPin,
  MessageSquare, FileText, ThumbsUp, Factory, Wrench,
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { FAQSection } from "../components/sections/FAQSection";
import { COMPANY_CONTACT } from "../data/content";
import { A, PP, IN, Btn, FadeUp, Label } from "../shared/ui";

const FEATURES = [
  { icon: Search, title: "Free Site Inspection", desc: "On-site assessment by certified engineers at no cost." },
  { icon: ClipboardList, title: "Customized Solutions", desc: "Tailored elevator systems designed for your building." },
  { icon: Wrench, title: "Certified Engineers", desc: "Factory-trained professionals with 10+ years experience." },
  { icon: CheckCircle, title: "Premium Quality Components", desc: "OEM-grade parts from globally trusted manufacturers." },
  { icon: FileText, title: "Safety Compliance", desc: "Full adherence to IS 14665 and NBC 2016 standards." },
  { icon: Factory, title: "Fast Installation", desc: "Streamlined project execution with minimal downtime." },
  { icon: MessageSquare, title: "24×7 Support", desc: "Round-the-clock emergency response and assistance." },
  { icon: ThumbsUp, title: "Annual Maintenance Services", desc: "Comprehensive AMC plans for long-term reliability." },
];

const QUOTE_STEPS = [
  { step: "01", title: "Submit Request", desc: "Share your project details through our quotation form.", icon: Send },
  { step: "02", title: "Requirement Review", desc: "Our team analyzes your specifications and building needs.", icon: ClipboardList },
  { step: "03", title: "Free Site Inspection", desc: "Certified engineers visit your site for accurate assessment.", icon: MapPin },
  { step: "04", title: "Technical Consultation", desc: "Expert guidance on elevator type, capacity, and configuration.", icon: MessageSquare },
  { step: "05", title: "Customized Quotation", desc: "Detailed proposal with transparent pricing and timelines.", icon: FileText },
  { step: "06", title: "Project Approval", desc: "Finalize scope, contract terms, and project schedule.", icon: ThumbsUp },
  { step: "07", title: "Manufacturing", desc: "Precision manufacturing at our ISO-certified facility.", icon: Factory },
  { step: "08", title: "Installation & Handover", desc: "Professional installation, testing, and formal handover.", icon: Wrench },
];

const PROJECT_TYPES = [
  "Residential", "Commercial", "Industrial", "Healthcare",
  "Hospitality", "Infrastructure", "Retail / Mall", "Government",
];

const ELEVATOR_TYPES = [
  "Passenger Elevator", "Home Elevator", "Hospital Elevator", "Freight Elevator",
  "Capsule Elevator", "Machine Room-Less (MRL)", "Hydraulic Elevator", "Dumbwaiter / Goods Lift",
];

const INITIAL_FORM = {
  fullName: "",
  companyName: "",
  email: "",
  mobile: "",
  projectType: "",
  elevatorType: "",
  floors: "",
  capacity: "",
  location: "",
  installDate: "",
  requirements: "",
  privacy: false,
};

type FormData = typeof INITIAL_FORM;
type FormErrors = Partial<Record<keyof FormData, string>>;

const inputClass =
  "w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:border-[#2F5D7C] focus:ring-2 focus:ring-[#2F5D7C]/10 transition-all";
const selectClass = `${inputClass} appearance-none cursor-pointer`;
const labelClass = "block text-xs font-semibold mb-2 tracking-wide";

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className={labelClass} style={{ color: "#5F5F5F", ...IN }}>
      {children}{required && <span className="text-[#2F5D7C] ml-0.5">*</span>}
    </label>
  );
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address";
  if (!data.mobile.trim()) errors.mobile = "Mobile number is required";
  else if (!/^[+]?[\d\s-]{10,15}$/.test(data.mobile.replace(/\s/g, ""))) errors.mobile = "Enter a valid mobile number";
  if (!data.projectType) errors.projectType = "Please select a project type";
  if (!data.elevatorType) errors.elevatorType = "Please select an elevator type";
  if (!data.privacy) errors.privacy = "You must accept the Privacy Policy";
  return errors;
}

export default function RequestQuote() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <PageLayout title="Request Quote" description="Request a customized elevator quotation from Hestra Elevators. Free site inspection, transparent pricing, and expert engineering consultation."
      breadcrumbs={[{ label: "Request Quote" }]}>
      <PageHero label="Get a Quote" title="Request Your Elevator Quote"
        description="Receive a customized proposal from India's trusted elevator engineering partner."
        image="photo-1486325212027-8081e485255e" />

      {/* Two-column layout */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column */}
            <div>
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#111111", ...PP }}>
                  Request Your Elevator Quote
                </h2>
                <p className="text-[#5F5F5F] leading-relaxed mb-10" style={IN}>
                  Hestra Elevators provides customized elevator solutions for residential, commercial,
                  industrial, healthcare, hospitality, and infrastructure projects. Share your requirements
                  and our engineering team will deliver a tailored quotation with transparent pricing.
                </p>
              </FadeUp>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {FEATURES.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <FadeUp key={f.title} delay={i * 0.05}>
                      <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 h-full shadow-sm hover:shadow-md hover:border-[#2F5D7C]/20 transition-all duration-300">
                        <div className="w-10 h-10 rounded-md flex items-center justify-center mb-3" style={{ background: "#EEF4F8" }}>
                          <Icon size={18} style={{ color: A }} />
                        </div>
                        <div className="font-semibold text-sm mb-1.5" style={{ color: "#111111", ...PP }}>{f.title}</div>
                        <p className="text-xs text-[#5F5F5F] leading-relaxed" style={IN}>{f.desc}</p>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>

              <FadeUp delay={0.2}>
                <div className="rounded-lg overflow-hidden shadow-lg border border-[#E5E5E5]">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format"
                    alt="Premium elevator cabin interior"
                    className="w-full h-56 md:h-64 object-cover"
                  />
                  <div className="bg-white p-5 border-t border-[#E5E5E5]">
                    <div className="font-semibold text-sm mb-1" style={{ color: "#111111", ...PP }}>Engineered for Excellence</div>
                    <p className="text-xs text-[#5F5F5F]" style={IN}>
                      Premium cabins, whisper-quiet operation, and industry-leading safety standards.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right column — form */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 lg:sticky lg:top-[92px]">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#111111", ...PP }}>Quotation Request Form</h3>
                  <p className="text-xs text-[#8B8B8B]" style={IN}>Fields marked with * are required</p>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-md flex items-center gap-3"
                    style={{ background: "#EEF4F8", border: "1px solid #2F5D7C33" }}
                  >
                    <CheckCircle size={20} style={{ color: A }} />
                    <p className="text-sm" style={{ color: A, ...IN }}>
                      Thank you! Your quote request has been submitted. Our team will contact you within one business day.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel required>Full Name</FieldLabel>
                      <input
                        type="text"
                        placeholder="Rajesh Kumar"
                        value={form.fullName}
                        onChange={e => update("fullName", e.target.value)}
                        className={`${inputClass} ${errors.fullName ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
                        style={{ color: "#111111", ...IN }}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1" style={IN}>{errors.fullName}</p>}
                    </div>
                    <div>
                      <FieldLabel>Company Name</FieldLabel>
                      <input
                        type="text"
                        placeholder="ABC Developers Pvt. Ltd."
                        value={form.companyName}
                        onChange={e => update("companyName", e.target.value)}
                        className={inputClass}
                        style={{ color: "#111111", ...IN }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel required>Email Address</FieldLabel>
                      <input
                        type="email"
                        placeholder="rajesh@company.com"
                        value={form.email}
                        onChange={e => update("email", e.target.value)}
                        className={`${inputClass} ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
                        style={{ color: "#111111", ...IN }}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1" style={IN}>{errors.email}</p>}
                    </div>
                    <div>
                      <FieldLabel required>Mobile Number</FieldLabel>
                      <input
                        type="tel"
                        placeholder={COMPANY_CONTACT.phone}
                        value={form.mobile}
                        onChange={e => update("mobile", e.target.value)}
                        className={`${inputClass} ${errors.mobile ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
                        style={{ color: "#111111", ...IN }}
                      />
                      {errors.mobile && <p className="text-red-500 text-xs mt-1" style={IN}>{errors.mobile}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel required>Project Type</FieldLabel>
                      <select
                        value={form.projectType}
                        onChange={e => update("projectType", e.target.value)}
                        className={`${selectClass} ${errors.projectType ? "border-red-400" : ""}`}
                        style={{ color: form.projectType ? "#111111" : "#8B8B8B", ...IN }}
                      >
                        <option value="" disabled>Select project type</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.projectType && <p className="text-red-500 text-xs mt-1" style={IN}>{errors.projectType}</p>}
                    </div>
                    <div>
                      <FieldLabel required>Elevator Type</FieldLabel>
                      <select
                        value={form.elevatorType}
                        onChange={e => update("elevatorType", e.target.value)}
                        className={`${selectClass} ${errors.elevatorType ? "border-red-400" : ""}`}
                        style={{ color: form.elevatorType ? "#111111" : "#8B8B8B", ...IN }}
                      >
                        <option value="" disabled>Select elevator type</option>
                        {ELEVATOR_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.elevatorType && <p className="text-red-500 text-xs mt-1" style={IN}>{errors.elevatorType}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel>Number of Floors</FieldLabel>
                      <input
                        type="text"
                        placeholder="e.g. 12"
                        value={form.floors}
                        onChange={e => update("floors", e.target.value)}
                        className={inputClass}
                        style={{ color: "#111111", ...IN }}
                      />
                    </div>
                    <div>
                      <FieldLabel>Estimated Capacity</FieldLabel>
                      <input
                        type="text"
                        placeholder="e.g. 1000 kg / 13 persons"
                        value={form.capacity}
                        onChange={e => update("capacity", e.target.value)}
                        className={inputClass}
                        style={{ color: "#111111", ...IN }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <FieldLabel>Installation Location</FieldLabel>
                    <input
                      type="text"
                      placeholder="City, State — e.g. Hyderabad, Telangana"
                      value={form.location}
                      onChange={e => update("location", e.target.value)}
                      className={inputClass}
                      style={{ color: "#111111", ...IN }}
                    />
                  </div>

                  <div className="mb-4">
                    <FieldLabel>Preferred Installation Date</FieldLabel>
                    <input
                      type="date"
                      value={form.installDate}
                      onChange={e => update("installDate", e.target.value)}
                      className={inputClass}
                      style={{ color: "#111111", ...IN }}
                    />
                  </div>

                  <div className="mb-5">
                    <FieldLabel>Additional Requirements</FieldLabel>
                    <textarea
                      rows={4}
                      placeholder="Describe special requirements — cabin finish, speed, traffic analysis, modernization scope..."
                      value={form.requirements}
                      onChange={e => update("requirements", e.target.value)}
                      className={`${inputClass} resize-none`}
                      style={{ color: "#111111", ...IN }}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.privacy}
                        onChange={e => update("privacy", e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-[#E5E5E5] accent-[#2F5D7C]"
                      />
                      <span className="text-xs text-[#5F5F5F] leading-relaxed" style={IN}>
                        I accept the{" "}
                        <a href="#" className="underline hover:opacity-80" style={{ color: A }}>Privacy Policy</a>
                        {" "}and agree to be contacted regarding my quotation request.
                      </span>
                    </label>
                    {errors.privacy && <p className="text-red-500 text-xs mt-1 ml-7" style={IN}>{errors.privacy}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Btn type="submit" variant="solid" className="flex-1 justify-center !py-4">
                      Submit Quote Request <Send size={15} />
                    </Btn>
                    <Btn type="button" variant="outline" className="flex-1 justify-center !py-4" onClick={handleReset}>
                      Reset Form <RotateCcw size={15} />
                    </Btn>
                  </div>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Quote process timeline */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-16">
            <Label text="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111111", ...PP }}>
              Quote Request Process
            </h2>
            <p className="text-[#5F5F5F] max-w-lg mx-auto" style={IN}>
              From your first enquiry to final handover — a transparent, step-by-step journey.
            </p>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute top-[2.75rem] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-transparent via-[#2F5D7C]/25 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUOTE_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <FadeUp key={step.title} delay={i * 0.06}>
                    <div className="relative group">
                      <div className="bg-[#F7F7F7] border border-[#E5E5E5] rounded-xl p-6 h-full hover:shadow-lg hover:border-[#2F5D7C]/25 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                            style={{ background: A, ...PP }}>
                            {step.step}
                          </div>
                          <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "#EEF4F8" }}>
                            <Icon size={16} style={{ color: A }} />
                          </div>
                        </div>
                        <h3 className="font-semibold text-sm mb-2" style={{ color: "#111111", ...PP }}>{step.title}</h3>
                        <p className="text-xs text-[#5F5F5F] leading-relaxed" style={IN}>{step.desc}</p>
                      </div>
                      {i < QUOTE_STEPS.length - 1 && (
                        <div className="hidden lg:block absolute -right-3 top-[2.75rem] w-6 h-[2px] z-10" style={{ background: A, opacity: 0.2 }} />
                      )}
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FAQSection limit={4} />
    </PageLayout>
  );
}
