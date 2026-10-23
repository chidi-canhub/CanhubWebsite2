export type Industry = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    summary: "Technology support for banks, lenders and regulated operations seeking safer workflows and stronger system clarity.",
    intro:
      "Financial services teams often rely on connected data, secure process automation and maintainable platforms that can evolve with regulation and operational pressure.",
    challenges: [
      "Commercial lending and banking workflows often span multiple systems and approval chains.",
      "Operational visibility can be weakened by fragmented data and manual handoffs.",
      "Regulated environments need strong controls, clear data handling and maintainable platform change.",
    ],
    solutions: [
      "Platform engineering for Salesforce-based workflows and customer operations.",
      "API and integration support between lending, CRM and back-office systems.",
      "Data validation, automation and process improvements that reduce operational friction.",
    ],
    services: [
      "Banking & nCino Solutions",
      "Salesforce & CRM Engineering",
      "Enterprise Integrations & APIs",
    ],
    cta: "Discuss your financial services challenge",
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary: "Commercially practical software support for underwriting, operations and service workflows.",
    intro:
      "Insurance organisations often need to make operational processes clearer, more responsive and easier to maintain without introducing fragile customisation.",
    challenges: [
      "Policy, claims and service workflows are often spread across multiple systems and teams.",
      "Poor data quality and inconsistent process visibility create operational drag.",
      "Legacy workflows can slow teams down when business needs change.",
    ],
    solutions: [
      "CRM and workflow enhancements that improve operational clarity and process consistency.",
      "Integration work for linking customer systems, data services and internal workflows.",
      "Technical consulting to help modernise systems without disrupting daily operations.",
    ],
    services: [
      "Salesforce & CRM Engineering",
      "Enterprise Integrations & APIs",
      "Technical Consulting & Support",
    ],
    cta: "Talk to Canhub about your insurance operations",
  },
  {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    summary: "Reliable digital systems for teams managing operational data, service workflows and business-critical information.",
    intro:
      "Healthcare and life sciences organisations need practical software that supports service operations, data quality and process consistency while remaining manageable for the teams using it.",
    challenges: [
      "Operational data often sits across business and laboratory environments.",
      "Business websites, systems and workflow tools must be dependable and easy to maintain.",
      "Teams need secure, clear digital experiences without over-complicated technology.",
    ],
    solutions: [
      "Web and application development for service and operational workflows.",
      "Data integration and workflow support for teams managing information across systems.",
      "Maintainable application support for business processes and operational continuity.",
    ],
    services: [
      "Web & Application Development",
      "Cloud & Data Engineering",
      "Technical Consulting & Support",
    ],
    cta: "Discuss your healthcare or life sciences technology needs",
  },
  {
    slug: "growing-businesses",
    title: "Growing Businesses",
    summary: "Practical technology support for ambitious teams building clearer systems and better operational foundations.",
    intro:
      "Growing businesses often need software that supports customer experience, internal operations and future scale without creating excessive overhead or technical complexity.",
    challenges: [
      "Teams can outgrow disconnected tools and manual processes quickly.",
      "Business systems need to scale without creating operational bottlenecks or repeated workarounds.",
      "Limited internal engineering capacity often makes delivery planning harder than the business case itself.",
    ],
    solutions: [
      "Bespoke websites and internal business applications tailored to the team's workflows.",
      "CRM enhancements, integrations and cloud-hosted application improvements.",
      "Retained engineering and consulting support to help keep technology aligned with growth.",
    ],
    services: [
      "Web & Application Development",
      "Salesforce & CRM Engineering",
      "Technical Consulting & Support",
    ],
    cta: "Explore the right support for your growth stage",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug) ?? null;
}
