export type PortfolioCaseStudy = {
  slug: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  outcome: string;
  image: string;
  gallery: string[];
  metaTitle: string;
  metaDescription: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string[];
  results: string[];
  services: string[];
};

export const PORTFOLIO_CASE_STUDIES: PortfolioCaseStudy[] = [
  {
    slug: "startup-brand-identity-system",
    category: "Brand Identity",
    year: "2024",
    title: "Brand identity system for a modern startup",
    summary:
      "A clean, high-contrast identity system built to help a new startup look credible across product, social, and investor-facing materials.",
    outcome: "+42% brand recall in audience testing",
    image: "/Portfolio.jpeg",
    gallery: ["/Portfolio.jpeg", "/Image/3-mark-logo-design.png", "/Image/3 mark.png"],
    metaTitle: "Brand Identity Case Study for a Modern Startup",
    metaDescription:
      "See how 3Craft Digital created a sharper startup brand identity system with better consistency, recall, and launch-ready assets.",
    client: "Confidential startup",
    industry: "B2B SaaS",
    location: "Pakistan / Remote",
    challenge:
      "The client had a promising product direction but no cohesive identity system. Their visuals lacked consistency across presentations, landing pages, and social channels.",
    solution: [
      "Developed a sharper logo direction and simplified mark system",
      "Defined typography, color palette, and brand usage rules",
      "Prepared export-ready identity assets for web, pitch decks, and social",
    ],
    results: [
      "Clearer launch-ready visual system for digital and print use",
      "Faster handoff for product, marketing, and founder communication assets",
      "Stronger perceived credibility during early-stage outreach",
    ],
    services: ["Branding", "Visual identity", "Brand kit"],
  },
  {
    slug: "service-brand-website-redesign",
    category: "Website Design",
    year: "2024",
    title: "Responsive website redesign for a service brand",
    summary:
      "A structured website redesign focused on stronger messaging, cleaner hierarchy, and smoother lead-generation flow for a growing service business.",
    outcome: "3x faster content publishing workflow",
    image: "/Websites/4.jpeg",
    gallery: ["/Websites/4.jpeg", "/Websites/1.jpeg", "/Websites/2.jpeg"],
    metaTitle: "Website Redesign Case Study for a Service Business",
    metaDescription:
      "Explore a service website redesign by 3Craft Digital focused on cleaner UX, better content structure, and stronger inquiry flow.",
    client: "Confidential service business",
    industry: "Professional services",
    location: "Pakistan",
    challenge:
      "The previous website looked dated, felt crowded on mobile, and made it difficult for the team to update service content without slowing down marketing work.",
    solution: [
      "Restructured page hierarchy around core services and proof points",
      "Designed responsive layouts for desktop and mobile browsing",
      "Created cleaner content sections to support easier CMS publishing",
    ],
    results: [
      "More polished first impression for inbound traffic",
      "Simpler service storytelling and stronger CTA positioning",
      "Improved content management efficiency for the client team",
    ],
    services: ["Website design", "Responsive UI", "Content structure"],
  },
  {
    slug: "social-visual-branding-system",
    category: "Visual Branding",
    year: "2024",
    title: "Social media and stationery kit for brand consistency",
    summary:
      "A visual branding system covering social assets and supporting collateral so the brand could stay consistent across recurring touchpoints.",
    outcome: "Unified visual system across 12 channels",
    image: "/VisualBranding.jpeg",
    gallery: ["/VisualBranding.jpeg", "/Image/3 shape.png"],
    metaTitle: "Visual Branding Case Study for Social and Print Assets",
    metaDescription:
      "See how 3Craft Digital built a visual branding system for social media, stationery, and repeatable brand consistency.",
    client: "Confidential client",
    industry: "Consumer brand",
    location: "Dubai / Remote",
    challenge:
      "The brand had good market energy but its content and stationery looked disconnected, making the business appear less premium than its actual offering.",
    solution: [
      "Defined a repeatable visual language for social content",
      "Created stationery and collateral aligned with the new direction",
      "Built a reusable asset system for ongoing internal and outsourced use",
    ],
    results: [
      "Stronger consistency across social, presentations, and print pieces",
      "Faster content creation for recurring campaigns",
      "Clearer brand recognition across multiple public touchpoints",
    ],
    services: ["Social media design", "Visual branding", "Stationery"],
  },
  {
    slug: "conversion-focused-landing-page",
    category: "Landing Page",
    year: "2023",
    title: "Conversion-focused landing page layout",
    summary:
      "A landing page direction built around offer clarity, messaging flow, and section hierarchy to improve lead-form completion.",
    outcome: "+31% lead-form completion rate",
    image: "/landing%20page.jpg.jpeg",
    gallery: ["/landing%20page.jpg.jpeg", "/Websites/68755dc162600810372545.png"],
    metaTitle: "Landing Page Design Case Study for Lead Generation",
    metaDescription:
      "Review a landing page case study by 3Craft Digital focused on stronger messaging, CTA hierarchy, and higher lead-form completion.",
    client: "Confidential growth-stage business",
    industry: "Digital services",
    location: "Global remote client",
    challenge:
      "Traffic was reaching the offer page, but the layout buried key value points and introduced friction before users reached the contact form.",
    solution: [
      "Rebuilt the page flow around clearer problem-solution messaging",
      "Improved section hierarchy and CTA spacing across the page",
      "Designed a more focused mobile-first lead capture path",
    ],
    results: [
      "Higher completion rate for lead-form submissions",
      "Stronger readability and faster user comprehension",
      "Better alignment between traffic intent and page message",
    ],
    services: ["Landing page design", "Conversion UX", "Messaging structure"],
  },
  {
    slug: "minimal-packaging-and-label-design",
    category: "Packaging",
    year: "2023",
    title: "Minimal packaging and label design system",
    summary:
      "Packaging and label work designed to feel premium on shelf while staying practical for approvals, dielines, and production.",
    outcome: "Shelf-ready design with faster print approvals",
    image: "/packaging%20(1).jpeg",
    gallery: [
      "/packaging%20(1).jpeg",
      "/packaging%20(2).jpeg",
      "/packaging%20(3).jpeg",
      "/packaging%20(4).jpeg",
    ],
    metaTitle: "Packaging Design Case Study for Product Presentation",
    metaDescription:
      "Explore a packaging and label design case study from 3Craft Digital focused on premium presentation and production-ready execution.",
    client: "Confidential product brand",
    industry: "Retail / consumer goods",
    location: "Pakistan",
    challenge:
      "The product needed packaging that looked premium enough for shelf presentation while staying practical for dielines, approvals, and repeated production use.",
    solution: [
      "Created a minimal packaging direction with stronger shelf clarity",
      "Prepared packaging visuals aligned with product positioning",
      "Supported approval-ready outputs for print and production stages",
    ],
    results: [
      "More polished retail presentation",
      "Faster review and approval cycles",
      "A reusable packaging direction for future SKUs",
    ],
    services: ["Packaging design", "Label design", "Print-ready assets"],
  },
];

export const PORTFOLIO_BY_SLUG = Object.fromEntries(
  PORTFOLIO_CASE_STUDIES.map((item) => [item.slug, item])
) as Record<string, PortfolioCaseStudy>;
