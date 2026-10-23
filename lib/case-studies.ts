export type CaseStudyStatus = "draft" | "published";
export type ClientApprovalStatus = "pending" | "approved" | "rejected";

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  clientApprovalStatus: ClientApprovalStatus;
  publicationStatus: CaseStudyStatus;
  summary: string;
  businessContext?: string;
  challenge?: string;
  approach?: string;
  deliveredSolution?: string;
  technologies?: string[];
  services?: string[];
  industry?: string;
  outcomes?: string[];
  projectUrl?: string;
  images?: string[];
  imageAltText?: string;
  approvedAt?: string | null;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "amazing-grace-biomedical-laboratory",
    slug: "amazing-grace-biomedical-laboratory",
    title: "Amazing Grace Biomedical Laboratory",
    clientName: "Amazing Grace Biomedical Laboratory",
    clientApprovalStatus: "approved",
    publicationStatus: "published",
    summary:
      "Amazing Grace Biomedical Laboratory provides diagnostic and preventive healthcare services in Abuja, with a public website that presents laboratory services, patient support and contact information clearly.",
    businessContext:
      "The organisation needed a clearer public-facing digital experience that made its laboratory services easier to understand and navigate for patients and healthcare professionals.",
    challenge:
      "The business required a website that would communicate service areas and support information in a structured, accessible way while maintaining clarity and trust.",
    approach:
      "We structured the website around service clarity, accessible navigation and a straightforward public information flow.",
    deliveredSolution:
      "A responsive public website that presents laboratory services, patient guidance and contact information in a clear and maintainable format.",
    technologies: [],
    services: ["Web & Application Development", "Technical Consulting & Support"],
    industry: "Healthcare & Life Sciences",
    projectUrl: "https://www.amazinggracebiomedlab.com/",
    approvedAt: "2026-10-23",
  },
  {
    id: "esh-services",
    slug: "esh-services",
    title: "ESH Services",
    clientName: "ESH Services",
    clientApprovalStatus: "approved",
    publicationStatus: "published",
    summary:
      "Approved public portfolio entry for an ESH Services engagement focused on practical digital support, clearer service communication and a maintainable online presence.",
    businessContext:
      "The business needed a straightforward digital foundation that presented its services and contact information more clearly to prospective clients and stakeholders.",
    challenge:
      "The project required a web presence that was concise, accessible and ready to support business enquiries without unnecessary complexity.",
    approach:
      "We built around the business requirement for clarity, maintainability and practical service presentation.",
    deliveredSolution:
      "A straightforward website experience designed to support service communication and business enquiries with a clear, consistent structure.",
    technologies: [],
    services: ["Web & Application Development", "Technical Consulting & Support"],
    industry: undefined,
    projectUrl: undefined,
    approvedAt: "2026-10-23",
  },
];

export function getPublishedCaseStudies(
  list: readonly CaseStudy[] = caseStudies,
): CaseStudy[] {
  return list.filter(
    (entry) =>
      entry.publicationStatus === "published" &&
      entry.clientApprovalStatus === "approved",
  );
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((entry) => entry.slug === slug) ?? null;
}
