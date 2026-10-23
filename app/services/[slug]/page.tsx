import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceDetailLayout } from "@/components/services/service-page";
import { getServiceBySlug, services } from "@/lib/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found | Canhub Software",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.title} | Canhub Software`,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Canhub Software`,
      description: service.summary,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ServiceDetailLayout service={service} />
      <SiteFooter />
    </>
  );
}
