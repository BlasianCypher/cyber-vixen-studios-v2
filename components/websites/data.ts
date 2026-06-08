import {
  AlertCircle,
  Award,
  BarChart3,
  Bot,
  Briefcase,
  Building,
  Calendar,
  Clock,
  Cloud,
  CreditCard,
  FormInput,
  Globe,
  Handshake,
  Lock,
  Megaphone,
  Monitor,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface ReasonCard {
  title: string;
  icon: LucideIcon;
  content: string;
  benefits?: string[];
  accent: string;
  variant: "white" | "purple" | "black" | "green";
}

export const websiteReasons: ReasonCard[] = [
  {
    title: "Builds Credibility",
    icon: ShieldCheck,
    content:
      "A professional website instantly demonstrates legitimacy, transparency, and commitment to your customers.",
    benefits: ["Real Business Presence", "Brand Authority", "Professional Image", "Increased Trust"],
    accent: "#8B5CF6",
    variant: "white",
  },
  {
    title: "Works 24/7",
    icon: Clock,
    content:
      "Your website never sleeps. It answers questions, captures leads, books appointments, and generates opportunities around the clock.",
    benefits: ["Lead Generation", "Appointment Booking", "Customer Education", "Revenue Opportunities"],
    accent: "#00BFFF",
    variant: "purple",
  },
  {
    title: "Customers Expect It",
    icon: Users,
    content:
      "Modern consumers research before buying. A website provides the information they need to make confident decisions.",
    accent: "#39FF14",
    variant: "black",
  },
  {
    title: "Looks Established",
    icon: Building,
    content:
      "Even small businesses can appear polished, organized, and professional with the right website.",
    accent: "#8B5CF6",
    variant: "white",
  },
  {
    title: "Control Of Your Brand",
    icon: Globe,
    content:
      "Unlike social media platforms, your website is digital property that you own and control.",
    accent: "#00BFFF",
    variant: "purple",
  },
  {
    title: "Generates Leads",
    icon: TrendingUp,
    content:
      "A strategic website converts visitors into customers through optimized user journeys and calls-to-action.",
    accent: "#39FF14",
    variant: "green",
  },
  {
    title: "Google Visibility",
    icon: Search,
    content:
      "Search engines connect potential customers to your business every day. Without a website, you're invisible to many opportunities.",
    accent: "#8B5CF6",
    variant: "black",
  },
  {
    title: "Competitive Advantage",
    icon: Award,
    content:
      "A professional website immediately helps your business stand out from competitors relying solely on social media.",
    accent: "#00BFFF",
    variant: "white",
  },
  {
    title: "Builds Trust",
    icon: Handshake,
    content:
      "Potential clients can learn about your services, process, expertise, and reputation before reaching out.",
    accent: "#8B5CF6",
    variant: "purple",
  },
  {
    title: "Supports Marketing",
    icon: Megaphone,
    content:
      "Your website becomes the destination for all advertising, social media, referrals, and marketing campaigns.",
    accent: "#39FF14",
    variant: "black",
  },
  {
    title: "Professionalism",
    icon: Briefcase,
    content:
      "A website signals preparedness, professionalism, and commitment to serving customers.",
    accent: "#00BFFF",
    variant: "white",
  },
  {
    title: "Showcases Work",
    icon: Monitor,
    content:
      "Display projects, testimonials, certifications, achievements, and success stories in one central location.",
    accent: "#8B5CF6",
    variant: "green",
  },
  {
    title: "Scales With Growth",
    icon: Rocket,
    content:
      "As your business evolves, your website evolves with it through new services, integrations, automation, and customer tools.",
    accent: "#00BFFF",
    variant: "purple",
  },
  {
    title: "Customer Confidence",
    icon: Lock,
    content:
      "Secure forms, transparent information, and strong branding help visitors feel confident doing business with you.",
    accent: "#8B5CF6",
    variant: "black",
  },
  {
    title: "Business Necessity",
    icon: AlertCircle,
    content:
      "Today, a website is not a competitive advantage. It's a business necessity.",
    accent: "#39FF14",
    variant: "white",
  },
];

export const credibilityStats = [
  { value: "75", suffix: "%+", label: "Of consumers judge credibility based on website quality", accent: "#8B5CF6" },
  { value: "88", suffix: "%", label: "Research online before making a purchase decision", accent: "#00BFFF" },
  { value: "24", suffix: "/7", label: "Your website works while you sleep, travel, and grow", accent: "#39FF14" },
  { value: "3", suffix: "sec", label: "Is all you have to make a first impression online", accent: "#8B5CF6" },
];

export const storyBlocks = [
  {
    title: "Your website is your digital storefront",
    body: "Before a customer ever walks through your door or picks up the phone, they've already formed an opinion. They search your name, compare you to competitors, and decide whether you're worth their time — all within seconds.",
    accent: "#8B5CF6",
  },
  {
    title: "Social media alone isn't enough",
    body: "Platforms change algorithms overnight. Accounts get suspended. Followers don't equal customers. A website gives you a permanent, owned presence that no platform can take away.",
    accent: "#00BFFF",
  },
  {
    title: "Every marketing channel leads home",
    body: "Google ads, Instagram posts, email campaigns, business cards, and word-of-mouth referrals — they all point somewhere. That somewhere should be a website built to convert curiosity into action.",
    accent: "#39FF14",
  },
];

export const websiteSolutions = [
  {
    title: "Business Websites",
    tagline: "Your professional digital headquarters",
    description:
      "Professional websites for businesses, churches, foundations, real estate companies, and growing brands that need to establish credibility and drive results.",
    features: ["Mobile Responsive", "Contact Forms", "SEO Ready", "Analytics Integration", "Modern Design", "CMS Integration"],
    accent: "#8B5CF6",
    glowTo: "#A78BFA",
  },
  {
    title: "eCommerce Websites",
    tagline: "Turn browsers into buyers",
    description:
      "Online stores designed to convert visitors into customers with seamless shopping experiences, secure checkout, and inventory management.",
    features: ["Product Catalogs", "Secure Payments", "Customer Accounts", "Inventory Support", "Mobile Shopping", "Order Management"],
    accent: "#00BFFF",
    glowTo: "#38BDF8",
  },
  {
    title: "Membership Websites",
    tagline: "Build communities that pay",
    description:
      "Private communities, courses, and subscription platforms with protected content, member dashboards, and recurring revenue models.",
    features: ["User Accounts", "Member Dashboards", "Protected Content", "Subscription Support", "Community Features", "Course Delivery"],
    accent: "#39FF14",
    glowTo: "#4ADE80",
  },
  {
    title: "Custom Web Applications",
    tagline: "Software built for your business",
    description:
      "Advanced web-based systems designed around your unique workflows — from internal dashboards to customer-facing platforms with AI and automation.",
    features: ["Dashboards", "Databases", "APIs", "AI Integrations", "Automation", "Custom Workflows"],
    accent: "#8B5CF6",
    glowTo: "#00BFFF",
  },
];

export const websiteFeatures = [
  { title: "Responsive Design", description: "Flawless experiences on every screen size, from mobile to desktop.", icon: Smartphone, accent: "#8B5CF6" },
  { title: "SEO Optimization", description: "Built-in search engine optimization to help customers find you.", icon: Search, accent: "#00BFFF" },
  { title: "Fast Loading", description: "Performance-tuned for speed — because every second counts.", icon: Zap, accent: "#39FF14" },
  { title: "Cloud Hosting", description: "Reliable, scalable infrastructure with enterprise-grade uptime.", icon: Cloud, accent: "#8B5CF6" },
  { title: "AI Integration", description: "Smart chatbots, automation, and intelligent user experiences.", icon: Bot, accent: "#00BFFF" },
  { title: "Booking Systems", description: "Let customers schedule appointments directly from your site.", icon: Calendar, accent: "#39FF14" },
  { title: "Payment Processing", description: "Secure payment gateways for products, services, and subscriptions.", icon: CreditCard, accent: "#8B5CF6" },
  { title: "Analytics", description: "Track visitors, conversions, and growth with integrated analytics.", icon: BarChart3, accent: "#00BFFF" },
  { title: "Contact Forms", description: "Capture leads with smart forms that route inquiries instantly.", icon: FormInput, accent: "#39FF14" },
  { title: "Automation", description: "Workflows that save time — from email sequences to CRM sync.", icon: Workflow, accent: "#8B5CF6" },
];

export const industries = [
  { name: "Real Estate", description: "Property listings, agent profiles, and lead capture systems.", accent: "#8B5CF6" },
  { name: "Churches", description: "Sermons, events, giving platforms, and community engagement.", accent: "#00BFFF" },
  { name: "Foundations", description: "Mission-driven sites with donation systems and impact stories.", accent: "#39FF14" },
  { name: "Nonprofits", description: "Fundraising, volunteer management, and awareness campaigns.", accent: "#8B5CF6" },
  { name: "Startups", description: "Launch-ready sites that impress investors and acquire users.", accent: "#00BFFF" },
  { name: "Restaurants", description: "Menus, reservations, online ordering, and location info.", accent: "#39FF14" },
  { name: "Consultants", description: "Authority-building sites with booking and resource libraries.", accent: "#8B5CF6" },
  { name: "Professional Services", description: "Law firms, accountants, agencies, and service providers.", accent: "#00BFFF" },
  { name: "Personal Brands", description: "Portfolios, blogs, and personal platforms that stand out.", accent: "#39FF14" },
  { name: "eCommerce", description: "Online stores built to sell products and scale revenue.", accent: "#8B5CF6" },
];

export const whyCVS = [
  { emoji: "⚡", title: "Lightning Fast", description: "Websites optimized for Core Web Vitals, speed scores, and real-world performance that keeps visitors engaged.", accent: "#8B5CF6" },
  { emoji: "🔍", title: "SEO Optimized", description: "Technical SEO, structured data, and content architecture designed to help your business get found on Google.", accent: "#00BFFF" },
  { emoji: "📱", title: "Mobile First", description: "Designed mobile-first so your site looks incredible on every device — because most traffic is mobile.", accent: "#39FF14" },
  { emoji: "☁️", title: "Cloud Powered", description: "Modern cloud infrastructure built for reliability, scalability, and global performance.", accent: "#8B5CF6" },
  { emoji: "🤖", title: "AI Enhanced", description: "Intelligent chatbots, automation workflows, and AI integrations that give you a competitive edge.", accent: "#00BFFF" },
  { emoji: "🔒", title: "Secure By Design", description: "SSL, secure forms, best-practice authentication, and infrastructure built with security at every layer.", accent: "#39FF14" },
];

export const processSteps = [
  { number: "01", title: "Discovery", description: "We learn your business, audience, goals, and competitive landscape to establish a clear foundation.", color: "#8B5CF6" },
  { number: "02", title: "Strategy", description: "A comprehensive roadmap covering architecture, features, timeline, SEO, and success metrics.", color: "#00BFFF" },
  { number: "03", title: "Design", description: "Premium interfaces and design systems crafted for conversion, accessibility, and brand alignment.", color: "#8B5CF6" },
  { number: "04", title: "Development", description: "Production-grade code with modern frameworks, rigorous testing, and performance optimization.", color: "#39FF14" },
  { number: "05", title: "Launch", description: "Seamless deployment with monitoring, security hardening, and quality assurance.", color: "#8B5CF6" },
  { number: "06", title: "Growth", description: "Ongoing optimization through analytics, SEO, content updates, and iterative improvements.", color: "#00BFFF" },
];

export const faqItems = [
  {
    question: "How much does a website cost?",
    answer: "Every project is unique. Pricing depends on scope, features, design complexity, and integrations. We provide custom quotes after a free consultation — no hidden fees, no surprises.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timeline varies by project. A business website typically takes 4–8 weeks. eCommerce and custom applications may take 8–16 weeks. We'll give you a clear timeline during your consultation.",
  },
  {
    question: "Can you redesign my current website?",
    answer: "Absolutely. We specialize in modernizing outdated websites — improving design, speed, SEO, and conversion rates while preserving what already works.",
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes. We set up and manage cloud hosting on modern infrastructure (Vercel, AWS, or similar) optimized for speed, security, and reliability.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes. We offer ongoing maintenance plans covering updates, security monitoring, backups, content changes, and performance optimization.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Every website we build is mobile-first and fully responsive. Your site will look and perform beautifully on phones, tablets, and desktops.",
  },
  {
    question: "Do you help with SEO?",
    answer: "Yes. SEO is built into every project — technical optimization, page structure, meta tags, site speed, and content strategy to help you rank on Google.",
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes. We integrate user-friendly content management systems so you can update text, images, and pages without needing a developer.",
  },
  {
    question: "What platforms and technologies do you use?",
    answer: "We use modern frameworks like Next.js, React, and headless CMS platforms — chosen based on your project's performance, scalability, and maintenance needs.",
  },
  {
    question: "What happens after my website launches?",
    answer: "We provide launch support, analytics setup, and optional growth plans. We're here for ongoing optimization, new features, and scaling as your business grows.",
  },
];

export const consultationTopics = [
  "Business goals & target audience",
  "Website features & functionality",
  "Design preferences & brand direction",
  "SEO opportunities & content strategy",
  "Recommended technology & integrations",
  "Project timeline & milestones",
  "Budget expectations & investment range",
];
