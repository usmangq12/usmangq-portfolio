import { Section } from "@/components/ui/Section";
import { expertiseDomains } from "@/lib/data";

export default function Expertise() {
  return (
    <Section id="expertise">
      <h2 className="text-2xl font-bold text-white">Ownership Domains</h2>

      <ul className="mt-8 space-y-5">
        {expertiseDomains.map(({ title, description }) => (
          <li key={title}>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-secondary">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
