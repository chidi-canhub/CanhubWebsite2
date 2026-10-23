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
    clientApprovalStatus: "pending",
    publicationStatus: "draft",
    summary:
      "Draft portfolio record for a laboratory website project that is awaiting owner confirmation and factual approval.",
    businessContext:
      "The business is a biomedical laboratory service provider with a website and public-facing information needs.",
    challenge:
      "The site needed to present the laboratory clearly, communicate services and support operational enquiries in a consistent and accessible way.",
    approach:
      "Responsive web implementation with structured content presentation and a straightforward deployment approach.",
    deliveredSolution:
      "The site was designed and deployed to provide accessible digital presentation and service information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    services: ["Web & Application Development"],
    industry: "Healthcare & Life Sciences",
    projectUrl: "https://www.amazinggracebiomedlab.com/",
    approvedAt: null,
  },
  {
    id: "esh-services",
    slug: "esh-services",
    title: "ESH Services",
    clientName: "ESH Services",
    clientApprovalStatus: "pending",
    publicationStatus: "draft",
    summary:
      "Draft portfolio record awaiting verification of scope, permission to publish and factual details.",
    businessContext:
      "This draft entry is retained for future portfolio content preparation only.",
    challenge:
      "Scope and completed outcomes require verification before any public case study can be published.",
    approach:
      "Awaiting approved project detail and client confirmation.",
    deliveredSolution:
      "Pending verification.",
    technologies: [],
    services: [],
    industry: undefined,
    projectUrl: undefined,
    approvedAt: null,
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
