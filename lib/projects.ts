/**
 * Portfolio data model.
 *
 * Only entries with `status: "approved"` are rendered on the public website.
 * An entry may be approved only once the project details are accurate and
 * the client has confirmed permission to publish them.
 */

type ProjectBase = {
  slug: string;
  title: string;
};

export type DraftProject = ProjectBase & {
  status: "draft";
  summary?: string;
};

export type ApprovedProject = ProjectBase & {
  status: "approved";
  summary: string;
  sector?: string;
  capabilities?: string[];
};

export type Project = DraftProject | ApprovedProject;

export const projects: Project[] = [
  {
    slug: "amazing-grace-biomedical-laboratory",
    title: "Amazing Grace Biomedical Laboratory",
    status: "approved",
    summary:
      "Biomedical laboratory website and patient information support for a healthcare service provider serving families and professionals in Abuja.",
    sector: "Healthcare & Life Sciences",
    capabilities: ["Web & Application Development", "Technical Consulting & Support"],
  },
  {
    slug: "esh-services",
    title: "ESH Services",
    status: "approved",
    summary:
      "Approved public portfolio entry for a practical digital engagement focused on clearer service presentation and accessible business information.",
    capabilities: ["Web & Application Development", "Technical Consulting & Support"],
  },
];

export function getPublishedProjects(
  list: readonly Project[] = projects,
): ApprovedProject[] {
  return list.filter(
    (project): project is ApprovedProject => project.status === "approved",
  );
}
