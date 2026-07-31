import { site } from "@/lib/site";
import { alphawga } from "@/lib/alphawga";

export default function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/about#person`,
    name: alphawga.founder,
    url: `${site.url}/about`,
    jobTitle: site.role,
    sameAs: [alphawga.linkedin],
  };

  const organization = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: alphawga.name,
    url: site.url,
    email: alphawga.email,
    founder: { "@id": `${site.url}/about#person` },
    sameAs: [alphawga.linkedin],
  };

  const json = {
    "@context": "https://schema.org",
    "@graph": [person, organization],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
