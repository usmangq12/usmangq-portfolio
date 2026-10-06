import { Section } from "@/components/ui/Section";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Section id="certifications">
      <h2 className="text-2xl font-bold text-foreground">Certifications</h2>

      <ul className="mt-8 space-y-3">
        {certifications.map((cert) => (
          <li key={cert.name} className="text-base">
            <span className="font-semibold text-foreground">{cert.name}</span>
            <span className="text-secondary"> — {cert.issuer} · </span>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent-light hover:underline"
            >
              {cert.credentialLabel}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
