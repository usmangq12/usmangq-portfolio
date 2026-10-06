import { Section } from "@/components/ui/Section";
import { expertiseDomains } from "@/lib/data";

export default function Expertise() {
  return (
    <Section id="expertise">
      <h2 className="text-2xl font-bold text-foreground">Ownership Domains</h2>

      <ul className="mt-8 space-y-5">
        {expertiseDomains.map(({ title, description }) => (
          <li key={title}>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-base leading-relaxed text-foreground">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
