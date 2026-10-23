import { getPublishedProjects, projects, type Project } from "@/lib/projects";

/**
 * Single source of truth for the public business contact address.
 * Footer, CTAs and any future contact form recipient must use these helpers
 * rather than hard-coding the address.
 */
export function getContactEmail(): string {
  return siteConfig.contact.email;
}

export function getContactPageHref(): string {
  return siteConfig.contact.pageHref;
}

export function getContactHref(): string {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    siteConfig.contact.subject,
  )}`;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Navigation items whose destinations exist on the page. The work section is
 * only included when there is an approved project to feature.
 */
export function getNavItems(list: readonly Project[] = projects) {
  const hasPublishedWork = getPublishedProjects(list).length > 0;
  return navItems.filter((item) => item.href !== "/work" || hasPublishedWork);
}

export const siteConfig = {
  name: "Canhub",
  companyName: "Canhub Software",
  tagline: "Software engineering and digital solutions",
  contact: {
    // Confirmed public address for Canhub Software Ltd. Also the intended
    // recipient for future contact forms. Delivery remains separately configured
    // and must be approved before being considered production-ready.
    email: "contact@canhubsoftware.com",
    pageHref: "/contact",
    subject: "Project Enquiry",
  },
  meta: {
    title: "Canhub Software | Software Engineering & Digital Solutions",
    description:
      "Canhub Software provides bespoke software development, Salesforce and CRM engineering, banking technology, integrations, and cloud and data solutions.",
  },
  homepage: {
    eyebrow: "Software engineering consultancy",
    title: "Software engineered for what's next.",
    description:
      "Canhub designs, builds and integrates digital solutions that help businesses solve complex challenges, streamline operations and grow with confidence.",
    primaryCta: {
      label: "Discuss Your Project",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Services",
      href: "/services",
    },
    highlights: [
      "Digital strategy",
      "Enterprise systems",
      "Platform integration",
      "Cloud and data",
    ],
    services: [
      {
        title: "Web & Application Development",
        description:
          "Modern web experiences and bespoke business applications designed around usability, resilience and growth.",
        href: "/services/web-application-development",
      },
      {
        title: "Salesforce & CRM Engineering",
        description:
          "Sales and service platforms tailored to process complexity, data quality and team productivity.",
        href: "/services/salesforce-crm",
      },
      {
        title: "Banking & nCino Solutions",
        description:
          "Bespoke banking technology support designed for regulated workflows, operational clarity and digital change.",
        href: "/services/banking-ncino",
      },
      {
        title: "Enterprise Integrations & APIs",
        description:
          "Connected systems that streamline workflows, join fragmented data sets and reduce manual business friction.",
        href: "/services/enterprise-integrations",
      },
      {
        title: "Cloud & Data Engineering",
        description:
          "Scalable cloud foundations and data services that improve reliability, insight and operational performance.",
        href: "/services/cloud-data-engineering",
      },
      {
        title: "Technical Consulting & Support",
        description:
          "Practical engineering guidance and hands-on support to help teams navigate delivery, risk and change.",
        href: "/services/technical-consulting",
      },
    ],
    valueProps: [
      {
        title: "Engineering-led problem solving",
        description:
          "We approach each challenge through technology, process and operational reality to design the right solution, not just a quick fix.",
      },
      {
        title: "Business context matters",
        description:
          "We focus on the way teams work, where operational friction sits and what the solution needs to enable long-term scalability.",
      },
      {
        title: "Complex platforms, handled clearly",
        description:
          "From integrations to enterprise tools, we work with complex digital environments while keeping delivery understandable and maintainable.",
      },
      {
        title: "Transparent collaboration",
        description:
          "We keep stakeholders informed, aligned and confident through each stage of delivery and ongoing support.",
      },
    ],
    industries: [
      {
        title: "Financial Services",
        description:
          "Technology strategy and platform support for institutions navigating compliance, customer experience and operational change.",
      },
      {
        title: "Insurance",
        description:
          "Solutions that support underwriting, policy workflows, customer journeys and more connected operational processes.",
      },
      {
        title: "Healthcare & Life Sciences",
        description:
          "Digital systems that improve process visibility, partner coordination and operational reliability in complex environments.",
      },
      {
        title: "Growing Businesses",
        description:
          "Flexible technology foundations that help scaling businesses streamline operations and prepare for the next stage of growth.",
      },
    ],
    architecture: [
      { layer: "Experience", detail: "Web and application interfaces" },
      { layer: "Integration", detail: "APIs and service connections" },
      { layer: "Platform", detail: "CRM and enterprise systems" },
      { layer: "Data & Cloud", detail: "Storage, pipelines and hosting" },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand the business problem, constraints and opportunities before choosing the right path forward.",
      },
      {
        title: "Design",
        description: "Shape a practical solution based on architecture, workflows, stakeholder needs and maintenance realities.",
      },
      {
        title: "Build",
        description: "Engineer and validate the implementation so the platform is resilient, usable and ready to evolve.",
      },
      {
        title: "Support",
        description: "Maintain momentum with ongoing improvements, operational guidance and thoughtful technical support.",
      },
    ],
  },
};
