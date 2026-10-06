import { Section } from "@/components/ui/Section";
import { platformPackages } from "@/lib/data";

export default function Packages() {
  return (
    <Section id="packages">
      <h2 className="text-2xl font-bold text-foreground">Platform Packages</h2>
      <p className="mt-2 text-secondary">
        Internal packages built and maintained at PLYAZ
      </p>

      <ul className="mt-8 space-y-5">
        {platformPackages.map((pkg) => (
          <li key={pkg.name}>
            <h3 className="font-mono text-base text-foreground">
              {pkg.name}
              <span className="ml-2 font-sans text-sm text-secondary">
                · {pkg.badge}
              </span>
            </h3>
            <p className="mt-1 text-base leading-relaxed text-foreground">
              {pkg.description}
            </p>
            <p className="mt-1.5 text-sm text-secondary">
              {pkg.tags.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
