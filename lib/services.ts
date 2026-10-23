export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  challenges: string[];
  deliverables: string[];
  capabilities: string[];
  approach: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "web-application-development",
    title: "Web & Application Development",
    eyebrow: "Digital product engineering",
    summary:
      "Modern web experiences and business applications built for reliability, speed and maintainability.",
    description:
      "Canhub helps organisations design and deliver digital products that are easier to use, easier to evolve and clearer for internal teams to operate.",
    challenges: [
      "Background processes, portals and customer journeys are fragmented across disconnected systems.",
      "Business teams need reliable digital experiences without a growing maintenance burden.",
      "Legacy interfaces and manual workflows slow down operational delivery and team productivity.",
    ],
    deliverables: [
      "Responsive corporate websites and marketing experiences.",
      "Bespoke web applications and internal business tools.",
      "Backend services, APIs and authentication patterns for secure access.",
      "Application modernisation work to improve maintainability and long-term clarity.",
    ],
    capabilities: [
      "TypeScript, JavaScript and React-based frontends.",
      "Next.js and modern component-driven product delivery.",
      "REST APIs, integrations and cloud-hosted architecture patterns.",
      "Accessibility, performance, maintainability and release confidence.",
    ],
    approach: [
      "Start with the real user journeys, business rules and constraint points.",
      "Design a practical architecture that matches delivery speed, maintenance needs and future growth.",
      "Build iteratively with clear quality checks, responsive validation and well-defined release steps.",
      "Support ongoing enhancement as the product matures and the business changes.",
    ],
    related: ["salesforce-crm", "enterprise-integrations", "technical-consulting"],
  },
  {
    slug: "salesforce-crm",
    title: "Salesforce & CRM Engineering",
    eyebrow: "Platform engineering",
    summary:
      "Engineering-led Salesforce work designed to improve process quality, visibility and operational performance.",
    description:
      "From configuration and data design to custom development and automation, Canhub helps teams make better use of Salesforce without creating fragile or hard-to-maintain platform complexity.",
    challenges: [
      "CRM processes are stretched across too many manual steps and disconnected systems.",
      "Sales, service and operations teams need clearer visibility without compromising control or governance.",
      "Platform change introduces risk when configuration, automation and code are not designed for long-term maintenance.",
    ],
    deliverables: [
      "Salesforce custom applications, workflows and platform enhancements.",
      "Apex, Lightning Web Components and automation features for complex business logic.",
      "Custom data models, security patterns and visibility design aligned to operational needs.",
      "Deployment-ready engineering for platform change, technical debt reduction and supportability.",
    ],
    capabilities: [
      "Salesforce application development and workflow design.",
      "Apex, Lightning Web Components, Flow and process automation.",
      "Platform Events, API-led integration and asynchronous processing.",
      "Deployment engineering, release discipline and operational support practices.",
    ],
    approach: [
      "Map the business process, data model and stakeholder responsibilities before code changes begin.",
      "Prioritise maintainable configuration, clear automation boundaries and secure platform design.",
      "Deliver enhancements with testing and validation tailored to the business risk of each change.",
      "Support long-term platform health with practical refinement and change guidance.",
    ],
    related: ["enterprise-integrations", "banking-ncino", "technical-consulting"],
  },
  {
    slug: "banking-ncino",
    title: "Banking & nCino Solutions",
    eyebrow: "Specialist banking technology",
    summary:
      "Support for Salesforce-based banking operations, commercial lending workflows and regulated system change.",
    description:
      "Canhub supports banking teams navigating operational complexity, digital workflows and platform change in environments where clarity, control and maintainability matter just as much as feature delivery.",
    challenges: [
      "Commercial lending and banking processes depend on tightly governed workflows and consistent data handling.",
      "Operational teams need safer, faster process execution without introducing fragile customisation.",
      "Legacy and modern banking systems create integration and maintenance challenges during continuous change.",
    ],
    deliverables: [
      "nCino-related Salesforce customisation and enhancement work.",
      "Commercial lending workflow and process support for banking operations.",
      "Integration and automation improvements connecting banking systems and operational teams.",
      "Platform troubleshooting, change support and long-term engineering maintenance.",
    ],
    capabilities: [
      "Salesforce platform engineering in regulated and operationally complex settings.",
      "Workflow automation, validation and custom Apex services for multi-step banking processes.",
      "Integration support between Salesforce and external banking services.",
      "Practical support for platform changes, operational resilience and platform sustainability.",
    ],
    approach: [
      "Understand the business workflow, operational dependencies and system boundaries first.",
      "Design for process clarity, approval logic and data quality before building customisations.",
      "Deliver incremental, well-tested changes that maintain business continuity.",
      "Provide technical support that helps teams manage change without creating unnecessary operational risk.",
    ],
    related: ["salesforce-crm", "enterprise-integrations", "technical-consulting"],
  },
  {
    slug: "enterprise-integrations",
    title: "Enterprise Integrations & APIs",
    eyebrow: "Connected systems",
    summary:
      "Reliable integrations that connect business-critical systems, reduce manual work and improve operational visibility.",
    description:
      "Canhub helps businesses align applications and data flows so information moves between systems consistently, securely and predictably.",
    challenges: [
      "Critical information is trapped in disconnected systems and manual handoffs.",
      "Teams struggle to reconcile inconsistent data or respond quickly to downstream errors.",
      "Operational bottlenecks are created when integration logic is fragile, undocumented or hard to monitor.",
    ],
    deliverables: [
      "REST API design and integration service development.",
      "Salesforce and external system connectivity for data exchange and process orchestration.",
      "Asynchronous processing patterns, event handling and monitoring for operational reliability.",
      "Secure integration patterns with robust handling for data mapping, retries and observability.",
    ],
    capabilities: [
      "REST APIs, event-driven architecture and integration design.",
      "System connectivity, data mapping and transformation between business platforms.",
      "Error handling, logging, monitoring and maintainable operational support.",
      "Integration testing and resilience patterns for production confidence.",
    ],
    approach: [
      "Identify the business events and data flows that matter most to the operation.",
      "Design integration boundaries, security requirements and error handling before coding begins.",
      "Implement and validate the full flow with testing, operational visibility and clear ownership.",
      "Support long-term reliability through monitoring, enhancements and technical escalation paths.",
    ],
    related: ["web-application-development", "salesforce-crm", "cloud-data-engineering"],
  },
  {
    slug: "cloud-data-engineering",
    title: "Cloud & Data Engineering",
    eyebrow: "Data and platform services",
    summary:
      "Cloud and data foundations that make systems easier to scale, govern and use for decision-making.",
    description:
      "Canhub supports businesses that need cleaner data flows, more useful reporting and a more maintainable platform foundation for growth.",
    challenges: [
      "Data lives in too many places, with inconsistent quality and unclear ownership.",
      "Teams want operational insight but lack reliable pipelines and extraction patterns.",
      "Cloud and data work can become difficult to manage without a clear architecture and long-term support model.",
    ],
    deliverables: [
      "Cloud-based application and data platform support.",
      "Data ingestion, transformation and SQL-based processing patterns.",
      "Analytics-ready dataset preparation and business-facing pipeline design.",
      "Automation and maintainability improvements for platform operations and data quality.",
    ],
    capabilities: [
      "Cloud application and integration support using modern service patterns.",
      "SQL, Python and workflow automation for data processing and validation.",
      "Data platform architecture planning for warehousing, transformation and reporting readiness.",
      "Observability, governance and operational practices that improve reliability.",
    ],
    approach: [
      "Start from the information the business needs, then design the data and platform flow around that outcome.",
      "Review the quality controls, access patterns and operational ownership requirements before building new pipelines.",
      "Implement incremental improvements that support both business insight and engineering maintainability.",
      "Provide structured guidance for ongoing platform improvement and change management.",
    ],
    related: ["enterprise-integrations", "web-application-development", "technical-consulting"],
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting & Support",
    eyebrow: "Advisory and delivery support",
    summary:
      "Practical technical guidance and hands-on support for teams working through uncertainty, change or delivery pressure.",
    description:
      "Canhub helps organisations clarify technical direction, reduce delivery risk and improve the way digital systems are designed, governed and supported over time.",
    challenges: [
      "Teams do not always have the internal capacity or perspective to define the right technical approach.",
      "Application issues and platform debt can create delivery drag and stakeholder frustration.",
      "Business change needs engineering decisions that balance speed, cost and maintainability.",
    ],
    deliverables: [
      "Technical discovery, requirements analysis and engineering recommendations.",
      "Architecture assessments, code review and engineering guidance.",
      "Application troubleshooting, integration support and release readiness review.",
      "Ongoing support for technical debt reduction, enhancements and operational continuity.",
    ],
    capabilities: [
      "Discovery workshops, solution shaping and architecture guidance.",
      "Application troubleshooting and operational incident support.",
      "Engineering review across product, platform and integration work.",
      "Project-based and retained technical support for teams that need practical expertise.",
    ],
    approach: [
      "Frame the business question, constraints and desired outcome before recommending a technical path.",
      "Assess current systems, process gaps and delivery risks with an eye on long-term cost and maintainability.",
      "Recommend practical next steps that are realistic for the team and the operating environment.",
      "Support the organisation through implementation, review and continuous improvement.",
    ],
    related: ["web-application-development", "salesforce-crm", "enterprise-integrations"],
  },
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));

export function getServiceBySlug(slug: string) {
  return serviceMap[slug] ?? null;
}
