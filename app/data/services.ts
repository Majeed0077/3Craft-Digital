export type Service = {
  slug: string;
  name: string;
  shortName: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  deliverables: string[];
  process: string[];
  audience: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const SERVICES: Service[] = [
  {
    slug: "branding",
    name: "Branding & Brand Identity Design",
    shortName: "Branding",
    kicker: "Brand Strategy",
    metaTitle: "Branding Agency in Karachi for Pakistan and Global Brands",
    metaDescription:
      "3Craft Digital creates logos, visual systems, brand kits, and identity design for businesses in Karachi, across Pakistan, and internationally.",
    heroTitle: "Branding that gives your business a clear, memorable identity.",
    heroDescription:
      "We build brand identity systems that help businesses look sharper, communicate consistently, and feel credible across digital and print touchpoints.",
    intro:
      "Our branding work goes beyond a logo. We define the visual direction, create reusable systems, and package the assets so your team can launch with confidence.",
    deliverables: [
      "Logo concepts and refined logo system",
      "Typography, color palette, and visual direction",
      "Brand kit with usage rules and export files",
      "Social, print, and presentation-ready brand assets",
    ],
    process: [
      "Discovery around market, offer, and audience",
      "Visual direction and concept development",
      "Identity system refinement and presentation",
      "Final exports, brand kit, and launch assets",
    ],
    audience: [
      "New businesses that need a professional launch identity",
      "Growing brands that need a cleaner, more consistent system",
      "Founders preparing for websites, campaigns, or investor decks",
    ],
    faqs: [
      {
        question: "Do you design only logos or full brand systems?",
        answer:
          "We focus on full brand systems so the identity works consistently across websites, social content, print, and marketing assets.",
      },
      {
        question: "Can you support both Pakistan-based and international brands?",
        answer:
          "Yes. We work with local businesses in Karachi and Pakistan, and we also structure branding work for global-first digital businesses.",
      },
    ],
  },
  {
    slug: "websites",
    name: "Website Design & Conversion-Focused Web Pages",
    shortName: "Websites",
    kicker: "Website Design",
    metaTitle: "Website Design Agency for Business, Landing Pages, and Service Sites",
    metaDescription:
      "3Craft Digital designs modern websites and landing pages with clear UX, stronger messaging, and conversion-focused layouts for Pakistan and global clients.",
    heroTitle: "Modern websites designed to look premium and convert clearly.",
    heroDescription:
      "We plan and design websites that communicate your offer fast, guide users smoothly, and turn traffic into serious inquiries.",
    intro:
      "Whether you need a service website, landing page, portfolio, or company site, our focus is clarity, hierarchy, mobile usability, and conversion flow.",
    deliverables: [
      "Website structure, page planning, and UX flow",
      "High-fidelity website design and responsive layouts",
      "Conversion-focused landing page sections",
      "Content guidance for hero, services, proof, and CTA blocks",
    ],
    process: [
      "Offer and audience review",
      "Site structure and page hierarchy planning",
      "Desktop and mobile layout design",
      "Polish, revisions, and dev handoff or build support",
    ],
    audience: [
      "Businesses that need a stronger first impression online",
      "Service brands that want more inquiries from their website",
      "Teams relaunching outdated websites with a cleaner message",
    ],
    faqs: [
      {
        question: "Do you handle only design or full website builds too?",
        answer:
          "We can support both design-only engagements and complete design plus build workflows depending on the project scope.",
      },
      {
        question: "Do you optimize websites for conversion, not just looks?",
        answer:
          "Yes. We focus on hierarchy, messaging, calls to action, and page flow so the site supports business goals rather than only visual presentation.",
      },
    ],
  },
  {
    slug: "shopify-design",
    name: "Shopify Website Design for Ecommerce Brands",
    shortName: "Shopify",
    kicker: "Shopify Design",
    metaTitle: "Shopify Design Agency for Ecommerce Brands",
    metaDescription:
      "3Craft Digital designs Shopify storefronts for ecommerce brands that need cleaner product presentation, stronger trust, and better conversion flow.",
    heroTitle: "Shopify design for ecommerce brands that need trust and momentum.",
    heroDescription:
      "We create Shopify storefront experiences that make products easier to browse, sharpen brand presentation, and support stronger conversion journeys.",
    intro:
      "Our Shopify design approach combines brand presentation with practical ecommerce UX, helping visitors move from discovery to checkout with less friction.",
    deliverables: [
      "Homepage and collection page design direction",
      "Product page hierarchy and conversion improvements",
      "Cart, trust, and upsell section planning",
      "Brand-consistent Shopify design system",
    ],
    process: [
      "Store review and conversion friction audit",
      "Wireframes for key ecommerce pages",
      "Shopify-focused interface design",
      "Theme-ready handoff or implementation guidance",
    ],
    audience: [
      "Ecommerce startups launching on Shopify",
      "Existing stores with weak visual consistency",
      "Brands improving product pages and storefront trust",
    ],
    faqs: [
      {
        question: "Can you redesign an existing Shopify store?",
        answer:
          "Yes. We can work with existing store structures and redesign the customer-facing experience without forcing a full business reset.",
      },
      {
        question: "Do you help with product page design too?",
        answer:
          "Yes. Product detail structure and trust-building sections are a core part of Shopify conversion work.",
      },
    ],
  },
  {
    slug: "wordpress-design",
    name: "WordPress Website Design for Service and Content Businesses",
    shortName: "WordPress",
    kicker: "WordPress Design",
    metaTitle: "WordPress Website Design Agency for Business Websites",
    metaDescription:
      "3Craft Digital designs WordPress websites for service businesses, content-led brands, and growing companies that need a cleaner, easier-to-manage site.",
    heroTitle: "WordPress websites designed for clarity, scalability, and easier updates.",
    heroDescription:
      "We design WordPress websites that help businesses present services clearly, publish content smoothly, and maintain a polished digital presence over time.",
    intro:
      "WordPress remains one of the most flexible options for content-driven and service-led websites. Our role is to make the experience look strong, feel intuitive, and stay maintainable.",
    deliverables: [
      "WordPress page structure and content hierarchy",
      "Service pages, blog, and key conversion sections",
      "Responsive page layout design",
      "Design direction built for clean CMS publishing",
    ],
    process: [
      "Review of goals, content, and CMS needs",
      "Structure for core pages and templates",
      "Visual design for desktop and mobile",
      "Launch-ready revisions and implementation support",
    ],
    audience: [
      "Service businesses needing manageable websites",
      "Content-first brands publishing articles or updates",
      "Companies migrating from outdated WordPress themes",
    ],
    faqs: [
      {
        question: "Is WordPress still a good choice for business websites?",
        answer:
          "Yes, especially for teams that need flexible page management, content publishing, and long-term scalability with broad plugin support.",
      },
      {
        question: "Can you redesign a WordPress website without changing the whole brand?",
        answer:
          "Yes. We can keep the core identity intact while improving layout, UX, page structure, and conversion flow.",
      },
    ],
  },
  {
    slug: "social-media-design",
    name: "Social Media Design & Visual Branding Assets",
    shortName: "Social Media",
    kicker: "Social Media Design",
    metaTitle: "Social Media Design Agency for Consistent Brand Content",
    metaDescription:
      "3Craft Digital creates social media design systems, campaign visuals, and branded content assets that keep your online presence consistent and recognizable.",
    heroTitle: "Social media design that keeps your brand consistent and recognizable.",
    heroDescription:
      "We design social content systems, promotional assets, and recurring visual formats that help businesses show up professionally across channels.",
    intro:
      "A strong brand falls apart quickly if social content looks disconnected. We create repeatable visual systems so your posts, stories, and campaigns feel unified.",
    deliverables: [
      "Social media post and story templates",
      "Campaign creatives and launch visuals",
      "Content layout systems for recurring categories",
      "Branded assets aligned with your identity",
    ],
    process: [
      "Content needs and channel review",
      "Visual system definition for social formats",
      "Template and campaign asset creation",
      "Final export package for ongoing use",
    ],
    audience: [
      "Brands building a more polished social presence",
      "Businesses running offers, launches, and campaigns",
      "Teams that need repeatable content systems",
    ],
    faqs: [
      {
        question: "Do you provide editable template systems?",
        answer:
          "Yes. We can package design systems in a way that supports recurring content production instead of one-off isolated graphics.",
      },
      {
        question: "Can this match an existing brand identity?",
        answer:
          "Yes. We can extend an existing brand or build a cleaner visual direction if the current social presence feels inconsistent.",
      },
    ],
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service])
) as Record<string, Service>;
