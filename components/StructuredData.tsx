import { site } from "@/lib/site";
import { alphawga } from "@/lib/alphawga";

// A branded search for "AlphaWGA" resolved to unrelated companies because the site
// gave Google one entity signal in total: a personal LinkedIn URL in sameAs. These
// nodes state the firm, the site and the service explicitly, and cross-reference each
// other by @id so they read as one entity rather than three loose objects.
export default function StructuredData() {
  const personId = `${site.url}/about#person`;
  const orgId = `${site.url}/#organization`;
  const siteId = `${site.url}/#website`;

  // Only profiles that exist and are controlled. An AlphaWGA company page on LinkedIn
  // is the missing signal here; add its URL once it exists.
  const profiles = [alphawga.linkedin];

  const person = {
    "@type": "Person",
    "@id": personId,
    name: alphawga.founder,
    url: `${site.url}/about`,
    jobTitle: site.role,
    worksFor: { "@id": orgId },
    sameAs: profiles,
  };

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: alphawga.name,
    alternateName: ["Alpha WGA", "AlphaWGA Consulting"],
    url: site.url,
    email: alphawga.email,
    description:
      "AlphaWGA is a business systems and operational control firm in Lagos, Nigeria. It helps operationally complex businesses understand where work, money and information break down, then decide what process, systems or technology change is justified.",
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/apple-icon`,
      width: 180,
      height: 180,
    },
    foundingDate: "2018",
    founder: { "@id": personId },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
    knowsAbout: [
      "Business systems",
      "Operational control",
      "Operations consolidation",
      "Process mapping",
      "Procurement operations",
      "ERP selection and implementation",
    ],
    sameAs: profiles,
  };

  const website = {
    "@type": "WebSite",
    "@id": siteId,
    name: alphawga.name,
    url: site.url,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };

  const service = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: `${alphawga.name} — business systems and operational control`,
    url: `${site.url}/offers`,
    parentOrganization: { "@id": orgId },
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Nigeria" },
    serviceType: [
      "Operational diagnosis",
      "Process redesign",
      "Systems selection and implementation",
    ],
  };

  const json = {
    "@context": "https://schema.org",
    "@graph": [person, organization, website, service],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
