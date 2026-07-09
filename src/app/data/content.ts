import {
  Settings, Factory, Wrench, Zap, Shield, Clock, BarChart3, Package, Award,
  Building, Building2, Heart, Star, ShoppingBag, Plane, GraduationCap, Truck, Home, Users,
} from "lucide-react";

export const PRODUCTS = [
  { cat: "passenger", name: "Passenger Elevators", desc: "Smooth, high-capacity vertical transport for commercial and residential buildings with premium cabin aesthetics.", spec: "Up to 2000 kg / 4 m/s", img: "/images/Elevator9.png", features: ["Gearless drive technology", "Premium cabin finishes", "Intelligent dispatch", "Energy regenerative drives"], applications: ["Office towers", "Residential complexes", "Mixed-use developments"] },
  { cat: "home", name: "Home Elevators", desc: "Compact residential elevators that blend seamlessly with luxury interiors with whisper-quiet operation.", spec: "Up to 400 kg / 0.6 m/s", img: "/images/Elevator2.jpeg", features: ["Minimal pit requirement", "Whisper-quiet operation", "Custom interior design", "Compact footprint"], applications: ["Villas", "Bungalows", "Duplex homes"] },
  { cat: "hospital", name: "Hospital Elevators", desc: "Wide-cabin healthcare lifts engineered for bed transport, with hygienic surfaces and priority dispatch.", spec: "Up to 2500 kg / 2 m/s", img: "/images/Hospital.png", features: ["Wide cabin for stretchers", "Antibacterial surfaces", "Priority dispatch", "Emergency power backup"], applications: ["Hospitals", "Clinics", "Medical centres"] },
  { cat: "freight", name: "Freight Elevators", desc: "Heavy-duty goods lifts for industrial and warehouse environments built to handle demanding daily loads.", spec: "Up to 10,000 kg / 0.5 m/s", img: "photo-1504307651254-35680f356dfd", features: ["Reinforced cabin structure", "Heavy-duty doors", "Load weighing system", "Industrial-grade controls"], applications: ["Warehouses", "Factories", "Loading docks"] },
  { cat: "capsule", name: "Capsule Elevators", desc: "Panoramic glass cabs that transform vertical travel into a scenic architectural experience.", spec: "Up to 1000 kg / 6 m/s", img: "photo-1555529669-e69e7aa0ba9a", features: ["360° panoramic glass", "Architectural integration", "LED ambient lighting", "High-speed travel"], applications: ["Hotels", "Malls", "Landmark buildings"] },
  { cat: "mrl", name: "Machine Room-Less (MRL)", desc: "Space-saving gearless drive technology with 30% smaller footprint and Class IE3 energy efficiency.", spec: "Up to 1600 kg / 2.5 m/s", img: "photo-1545324418-cc1a3fa10c00", features: ["No machine room required", "30% space savings", "IE3 energy efficiency", "Reduced installation cost"], applications: ["Mid-rise buildings", "Retrofit projects", "Space-constrained sites"] },
  { cat: "hydraulic", name: "Hydraulic Elevators", desc: "Proven hydraulic systems for low-rise buildings up to 6 floors with ultra-smooth ride quality.", spec: "Up to 5000 kg / 0.6 m/s", img: "photo-1460317442991-0ec209397118", features: ["Smooth ride quality", "Cost-effective for low-rise", "Reliable hydraulic drive", "Easy maintenance access"], applications: ["Low-rise commercial", "Residential buildings", "Small offices"] },
  { cat: "goods", name: "Dumbwaiters & Goods Lifts", desc: "Compact service lifts for restaurants, hotels, and hospitals with flush-mounted door configurations.", spec: "Up to 500 kg / 0.5 m/s", img: "photo-1551882547-ff40c4a49f39", features: ["Compact shaft design", "Food-grade options", "Quiet operation", "Multiple stop configurations"], applications: ["Restaurants", "Hotels", "Hospitals", "Libraries"] },
];

export const PRODUCT_CATS = ["All", "passenger", "home", "hospital", "freight", "capsule", "mrl", "hydraulic", "goods"] as const;
export const PRODUCT_CAT_LABELS: Record<string, string> = { All: "All", passenger: "Passenger", home: "Home", hospital: "Hospital", freight: "Freight", capsule: "Capsule", mrl: "MRL", hydraulic: "Hydraulic", goods: "Goods" };

export const SERVICES = [
  { icon: Settings, title: "Design & Engineering", desc: "Custom structural and cabin engineering with AutoCAD schematics, load analysis, and site-specific solutions." },
  { icon: Factory, title: "Manufacturing", desc: "ISO-certified facility producing precision elevator assemblies — from rails and counterweights to controllers." },
  { icon: Wrench, title: "Installation", desc: "Certified installation teams ensure every elevator is erected, aligned, and commissioned to exacting tolerances." },
  { icon: Zap, title: "Modernization", desc: "Retrofit aging systems with modern variable-frequency drives, new controls, and refreshed cabin interiors." },
  { icon: Shield, title: "Safety Inspections", desc: "End-to-end safety audits covering mechanical, electrical, structural, and regulatory compliance checks." },
  { icon: Clock, title: "24/7 Emergency Service", desc: "Round-the-clock breakdown response with certified technicians and rapid genuine spare parts availability." },
  { icon: BarChart3, title: "AMC & Preventive Care", desc: "Structured maintenance contracts tailored to building type, usage intensity, and compliance requirements." },
  { icon: Package, title: "Spare Parts Supply", desc: "OEM-quality spare parts dispatched fast across India. Genuine components backed by full technical warranty." },
  { icon: Award, title: "Testing & Commissioning", desc: "Pre-handover protocol covering load tests, overspeed governor checks, brake tests, and safety device certification." },
];

export const INDUSTRIES = [
  { icon: Building, label: "Residential", desc: "Luxury home elevators and residential tower solutions with whisper-quiet operation and elegant cabin designs." },
  { icon: Building2, label: "Commercial", desc: "High-traffic passenger elevators for office towers, corporate campuses, and business parks." },
  { icon: Heart, label: "Hospitals", desc: "Wide-cabin hospital elevators with stretcher compatibility, hygienic surfaces, and priority dispatch." },
  { icon: Star, label: "Hotels & Hospitality", desc: "Premium capsule and passenger elevators that enhance guest experience and architectural appeal." },
  { icon: ShoppingBag, label: "Shopping Malls", desc: "High-capacity elevators and escalators for retail environments with heavy footfall." },
  { icon: Plane, label: "Airports", desc: "Heavy-duty, high-reliability vertical transport for terminals and transit hubs." },
  { icon: GraduationCap, label: "Education", desc: "Accessible elevator solutions for schools, colleges, and university campuses." },
  { icon: Factory, label: "Industrial", desc: "Freight elevators and goods lifts for manufacturing plants and industrial facilities." },
  { icon: Truck, label: "Warehousing", desc: "Robust goods lifts and freight elevators for logistics and distribution centres." },
  { icon: Home, label: "Government", desc: "Compliant elevator systems for government buildings, secretariats, and public infrastructure." },
  { icon: Users, label: "IT Parks", desc: "Smart elevator systems with IoT monitoring for technology campuses and SEZs." },
  { icon: Zap, label: "Metro & Transit", desc: "High-reliability elevators for metro stations, railways, and public transit infrastructure." },
];

export const WHY = [
  { title: "10+ Years of Engineering Excellence", desc: "Over a decade and a half delivering elevator solutions across India's most demanding projects — from 5-star hotels to metro infrastructure." },
  { title: "ISO 9001:2015 Certified Processes", desc: "Every stage — design, manufacturing, installation — follows internationally certified quality management systems." },
  { title: "500+ Successful Installations", desc: "A proven track record spanning residential, commercial, healthcare, and industrial verticals." },
  { title: "100+ Expert Technicians Nationwide", desc: "Factory-trained service engineers available in all major cities with rapid response SLAs." },
  { title: "Energy-Efficient Drivetrain Technology", desc: "IE3 gearless motors and regenerative drives reduce building energy costs by up to 40%." },
  { title: "Genuine Spare Parts, Always", desc: "OEM parts inventory across all depots ensures first-time fix rates above 95%." },
];

export const SAFETY = [
  { num: "01", title: "Load & Overload Testing", desc: "Every elevator undergoes 125% rated load testing before handover, conforming to IS 14665 standards." },
  { num: "02", title: "Overspeed Governor", desc: "Redundant mechanical governors trigger emergency braking if descent speed exceeds safe parameters." },
  { num: "03", title: "Emergency Rescue Device", desc: "Automatic Rescue Device (ARD) moves the cabin to the nearest floor on power failure and opens doors safely." },
  { num: "04", title: "Door Sensor Systems", desc: "Multi-beam infrared door protection with force reversal prevents injuries during door closing cycles." },
  { num: "05", title: "Fire Safety Compliance", desc: "Fire-rated landing doors, emergency lighting, and fire-service mode comply with NBC 2016 norms." },
  { num: "06", title: "Seismic Protection", desc: "Earthquake sensors halt and home the elevator before ground movement exceeds structural design thresholds." },
  { num: "07", title: "Buffer Testing", desc: "Spring and hydraulic buffers tested to absorb kinetic energy during emergency stops at pit level." },
  { num: "08", title: "Child Safety Features", desc: "Restricted door opening, anti-nuisance controls, and child-safe cabin buttons prevent misuse." },
  { num: "09", title: "Power Backup Systems", desc: "UPS and ARD systems ensure safe passenger evacuation during power outages." },
];

export const QUALITY_PROCESS = [
  { step: "01", title: "Incoming Material Inspection", desc: "All raw materials and components verified against specifications before entering production." },
  { step: "02", title: "In-Process Quality Checks", desc: "Dimensional checks, weld inspections, and assembly verification at every manufacturing stage." },
  { step: "03", title: "Factory Acceptance Testing", desc: "Complete functional testing of drive, controls, and safety devices before dispatch." },
  { step: "04", title: "Site Installation Audit", desc: "Guide rail alignment, pit depth, and electrical compliance verified on-site." },
  { step: "05", title: "Statutory Inspection", desc: "Third-party inspection agency certification before commercial operation." },
];

export const TIMELINE = [
  { step: "01", title: "Site Consultation", desc: "Structural assessment, shaft dimensions, traffic analysis, and client brief alignment." },
  { step: "02", title: "Engineering Design", desc: "AutoCAD layouts, load calculations, and bespoke cabin specification finalized." },
  { step: "03", title: "Manufacturing", desc: "Components manufactured in ISO-certified facility with in-process quality checks." },
  { step: "04", title: "Site Preparation", desc: "Pit construction, guide rail fixing, and hoistway electrical roughing-in." },
  { step: "05", title: "Installation", desc: "Systematic erection of rails, car frame, counterweights, drive, and controls." },
  { step: "06", title: "Testing & Commissioning", desc: "Full protocol testing: load, brakes, safeties, door systems, emergency devices." },
  { step: "07", title: "Safety Inspection", desc: "Third-party statutory inspection and certification by approved inspection agency." },
  { step: "08", title: "Handover & AMC", desc: "Formal client handover with operating manuals and AMC enrollment for ongoing care." },
];

export const AMC_PLANS = [
  { tier: "Essential", freq: "Quarterly Visits", price: "₹ 8,000", period: "/ year", features: ["4 preventive visits / year", "Lubrication & adjustment", "Emergency response: 12 hrs", "Annual safety audit", "Phone support 9 AM–6 PM"], highlight: false },
  { tier: "Professional", freq: "Monthly Visits", price: "₹ 18,000", period: "/ year", features: ["12 preventive visits / year", "Parts replacement (wear items)", "Emergency response: 6 hrs", "Monthly performance report", "24/7 phone & WhatsApp support", "IoT remote monitoring"], highlight: true },
  { tier: "Enterprise", freq: "Bi-Weekly Visits", price: "Custom", period: "quote", features: ["24 preventive visits / year", "All parts covered (excl. vandalism)", "Emergency response: 2 hrs", "Dedicated service engineer", "Quarterly compliance reports", "24/7 on-call technician", "Fleet dashboard access"], highlight: false },
];

export const MAINTENANCE_BENEFITS = [
  "Extended equipment lifespan by up to 40%",
  "Reduced unplanned breakdowns and downtime",
  "Compliance with statutory safety regulations",
  "Lower long-term repair and replacement costs",
  "Priority emergency response with guaranteed SLAs",
  "Detailed maintenance reports and audit trails",
];

export const PROJECTS = [
  { cat: "commercial", name: "Prestige Tech Park", loc: "Bengaluru", type: "MRL Passenger", floors: 22, cap: "16 units", year: 2023, img: "/images/commercial.png" },
  { cat: "residential", name: "Oberoi Realty Tower", loc: "Mumbai", type: "High-Speed Passenger", floors: 45, cap: "8 units", year: 2022, img: "/images/Elavator1.jpeg" },
  { cat: "hospital", name: "Apollo Hospitals Wing", loc: "Chennai", type: "Hospital Elevators", floors: 12, cap: "6 units", year: 2023, img: "/images/Hospital.png" },
  { cat: "hotel", name: "ITC Grand Bharat", loc: "Gurgaon", type: "Capsule & Passenger", floors: 18, cap: "10 units", year: 2022, img: "/images/Elevator7.jpeg" },
  { cat: "mall", name: "Nexus Elante Mall", loc: "Chandigarh", type: "Escalators & Capsule", floors: 4, cap: "14 units", year: 2021, img: "/images/Elevator6.jpeg" },
  { cat: "government", name: "State Secretariat Complex", loc: "Hyderabad", type: "Passenger & Freight", floors: 15, cap: "20 units", year: 2023, img: "/images/Elevator10.jpg" },
  { cat: "commercial", name: "Corporate Tower Installation", loc: "Pune", type: "Passenger Elevators", floors: 28, cap: "12 units", year: 2024, img: "/images/Elevator3.jpeg" },
  { cat: "residential", name: "Luxury Residential Complex", loc: "Delhi NCR", type: "Home Elevators", floors: 32, cap: "6 units", year: 2023, img: "/images/Elevator4.jpeg" },
  { cat: "commercial", name: "High-Rise Passenger System", loc: "Kolkata", type: "High-Speed Passenger", floors: 35, cap: "10 units", year: 2024, img: "/images/Elevator9.png" },
  { cat: "residential", name: "Premium Villa Elevators", loc: "Hyderabad", type: "Home Elevators", floors: 4, cap: "2 units", year: 2023, img: "/images/Elevator2.jpeg" },
];

export const PROJECT_CATS = ["All", "commercial", "residential", "hospital", "hotel", "mall", "government"] as const;

export const TESTIMONIALS = [
  { name: "Rajesh Nair", title: "Facility Manager, Prestige Group", rating: 5, text: "Hestra delivered 16 MRL elevators for our tech park on schedule. The ride quality is exceptional and the AMC team is genuinely responsive. A world-class experience." },
  { name: "Dr. Meena Krishnan", title: "Director of Operations, Apollo Hospitals", rating: 5, text: "Hospital elevator needs are unique. Hestra understood that from day one — wide cabins, silent operation, emergency protocols. We have not had a single unplanned outage in 18 months." },
  { name: "Arjun Mehta", title: "Project Director, Oberoi Realty", rating: 5, text: "For a 45-floor luxury residential tower, we needed elevators that matched the building's prestige. Hestra's high-speed units with custom mirror-finish cabins exceeded every expectation." },
  { name: "Sunita Sharma", title: "GM Engineering, ITC Hotels", rating: 5, text: "The capsule elevators Hestra installed in our atrium have become a signature feature that guests photograph and compliment. Functionally flawless, aesthetically stunning." },
];

export const FAQS = [
  { q: "How long does elevator installation typically take?", a: "Standard passenger elevator installation takes 4–8 weeks depending on the number of floors, shaft readiness, and elevator type. Hospital and freight elevators with larger cabins may require 8–12 weeks. We provide a detailed project timeline after the site survey." },
  { q: "What is included in the Annual Maintenance Contract?", a: "AMC covers scheduled preventive visits, lubrication, adjustment of all mechanical and electrical components, safety device testing, and priority emergency response. The Professional and Enterprise tiers additionally cover wear-part replacements and remote IoT monitoring." },
  { q: "Are your elevators compliant with Indian safety standards?", a: "Yes. All Hestra elevators comply with Bureau of Indian Standards IS 14665 (Parts 1–5), National Building Code 2016, and relevant state lift regulations. We facilitate third-party statutory inspections and certification." },
  { q: "Do you offer modernization of existing elevators from other brands?", a: "Absolutely. We modernize elevators from all major brands including Otis, KONE, Schindler, and Johnson. Modernization typically covers new variable-frequency drives, controllers, door systems, and cabin interiors." },
  { q: "What happens if the elevator stops during a power failure?", a: "All Hestra elevators are equipped with Automatic Rescue Devices (ARD). On power failure, the ARD moves the cabin to the nearest floor landing, opens the doors, and parks the elevator safely — preventing passenger entrapment." },
  { q: "Do you provide elevators for residential homes?", a: "Yes. Our home elevator range is specifically designed for residential villas and bungalows, requiring minimal structural changes. They are compact, quiet, energy-efficient, and available in a wide range of cabin finish options." },
  { q: "How do I request a quotation?", a: "Visit our Request Quote page and fill in your project details. Our engineering team will review your requirements, conduct a free site inspection, and provide a customized quotation within 3–5 business days." },
  { q: "What warranty do you offer on new installations?", a: "All new Hestra elevator installations come with a comprehensive 12-month warranty covering manufacturing defects, installation workmanship, and all mechanical and electrical components." },
];

export const CERTS = ["ISO 9001:2015", "BIS IS 14665", "NBC 2016 Compliant", "CE Marked Components", "DGMS Approved", "Green Building Ready"];

export const VALUES = [
  { title: "Safety First", desc: "Every decision prioritizes passenger safety above all else." },
  { title: "Engineering Integrity", desc: "Precision engineering with zero compromise on quality." },
  { title: "Customer Partnership", desc: "Long-term relationships built on trust and transparency." },
  { title: "Innovation", desc: "Continuous adoption of global best practices and technology." },
];

export const LEADERSHIP = [
  { name: "Harsha Vardhan", role: "Founder & CEO", bio: "10+ years in vertical transportation engineering. lead engineer at a leading elevator manufacturer." },
  { name: "Dhanunjay P", role: "Chief Technology Officer", bio: "Specialist in gearless drive systems and IoT-enabled elevator monitoring platforms." },
  { name: "Arun Desai", role: "Director of Operations", bio: "Oversees nationwide installation teams and manufacturing quality across 12 service centres." },
  { name: "Kavitha Reddy", role: "Head of Safety & Compliance", bio: "Certified lift inspector with expertise in IS 14665 compliance and statutory inspections." },
];

export const GALLERY_IMAGES = [
  { cat: "commercial", title: "Commercial Elevator Installation", img: "/images/Elavator1.jpeg" },
  { cat: "residential", title: "Passenger Elevator Cabin", img: "/images/Elevator2.jpeg" },
  { cat: "commercial", title: "Modern Elevator Interior", img: "/images/Elevator3.jpeg" },
  { cat: "hospital", title: "Hospital Elevator Installation", img: "/images/Hospital.png" },
  { cat: "hotel", title: "Premium Lift Design", img: "/images/Elevator9.png" },
  { cat: "mall", title: "Shopping Complex Elevator", img: "/images/Elevator6.jpeg" },
  { cat: "industrial", title: "Industrial Freight Elevator", img: "/images/Elevator7.jpeg" },
  { cat: "residential", title: "Residential Elevator Cabin", img: "/images/Elevator4.jpeg" },
  { cat: "commercial", title: "Office Building Elevator", img: "/images/Elevator10.jpg" },
];

export const GALLERY_CATS = ["All", "commercial", "residential", "hospital", "hotel", "mall", "industrial"] as const;

export const BLOG_POSTS = [
  { id: 1, title: "5 Signs Your Elevator Needs Modernization", excerpt: "Aging elevators pose safety risks and increase energy costs. Learn the key indicators that it's time to upgrade.", category: "Maintenance", date: "Mar 15, 2026", img: "photo-1460317442991-0ec209397118", readTime: "5 min" },
  { id: 2, title: "Understanding IS 14665: India's Elevator Safety Standard", excerpt: "A comprehensive guide to the Bureau of Indian Standards regulations governing elevator design and installation.", category: "Safety", date: "Feb 28, 2026", img: "photo-1504307651254-35680f356dfd", readTime: "8 min" },
  { id: 3, title: "Energy-Efficient Elevators: IE3 Motors Explained", excerpt: "How gearless IE3 motors and regenerative drives can reduce your building's energy consumption by up to 40%.", category: "Technology", date: "Feb 10, 2026", img: "photo-1545324418-cc1a3fa10c00", readTime: "6 min" },
  { id: 4, title: "Hospital Elevator Design: Critical Considerations", excerpt: "From stretcher compatibility to infection control — what healthcare facilities must demand from their elevator partner.", category: "Industries", date: "Jan 22, 2026", img: "photo-1519494026892-80bbd2d6fd0d", readTime: "7 min" },
  { id: 5, title: "AMC Best Practices for Building Managers", excerpt: "How to choose the right maintenance contract tier and ensure your elevators remain compliant year-round.", category: "Maintenance", date: "Jan 8, 2026", img: "photo-1558618666-fcd25c85cd64", readTime: "4 min" },
  { id: 6, title: "Capsule Elevators: Architecture Meets Engineering", excerpt: "How panoramic glass elevators transform building atriums into signature architectural features.", category: "Design", date: "Dec 18, 2025", img: "photo-1555529669-e69e7aa0ba9a", readTime: "5 min" },
];

export const JOB_OPENINGS = [
  { title: "Senior Installation Engineer", dept: "Installation", location: "Bengaluru", type: "Full-time", desc: "Lead elevator installation projects for commercial and residential high-rise buildings." },
  { title: "Service Technician", dept: "Maintenance", location: "Mumbai", type: "Full-time", desc: "Perform preventive maintenance, repairs, and emergency breakdown response for assigned territory." },
  { title: "Sales Manager — North India", dept: "Sales", location: "Delhi NCR", type: "Full-time", desc: "Drive new business development for elevator sales across North India region." },
  { title: "Quality Assurance Engineer", dept: "Manufacturing", location: "Gurugram", type: "Full-time", desc: "Ensure manufacturing quality compliance with ISO 9001:2015 and IS 14665 standards." },
  { title: "Graduate Engineer Trainee", dept: "Engineering", location: "Gurugram", type: "Full-time", desc: "12-month rotational program across design, manufacturing, installation, and service divisions." },
];

export const CAREER_BENEFITS = [
  "Competitive salary with performance incentives",
  "Comprehensive health insurance for family",
  "Factory training and global certification programs",
  "Career growth in India's fastest-growing elevator market",
  "Modern tools, safety equipment, and company vehicles",
  "Inclusive culture with 500+ team members nationwide",
];

export const NAV_ROUTES = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Safety", path: "/safety" },
  { label: "Gallery", path: "/gallery" },
] as const;

export const COMPANY_CONTACT = {
  name: "Hestra Elevators Pvt. Ltd.",
  address: "Plot No. 3, Road No. 5, Srinivas Nagar Colony, Chintal, Hyderabad - 500054.",
  addressLines: [
    "Plot No. 3, Road No. 5,",
    "Srinivas Nagar Colony, Chintal,",
    "Hyderabad - 500054.",
  ],
  phone: "+91 7794880858",
  phoneHref: "tel:+917794880858",
  whatsappHref: "https://wa.me/917794880858",
  email: "hestraelevators2025@gmail.com",
  emailHref: "mailto:hestraelevators2025@gmail.com",
  instagram: "https://www.instagram.com/hestraelevators/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+No.+3,+Road+No.+5,+Srinivas+Nagar+Colony,+Chintal,+Hyderabad+-+500054",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Plot+No.+3,+Road+No.+5,+Srinivas+Nagar+Colony,+Chintal,+Hyderabad+-+500054&output=embed",
} as const;
