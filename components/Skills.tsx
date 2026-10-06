import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>

      <ul className="mt-8 space-y-3">
        {skillGroups.map((group) => (
          <li key={group.title} className="text-base leading-relaxed">
            <span className="font-semibold text-foreground">{group.title}:</span>{" "}
            <span className="text-foreground">{group.skills.join(", ")}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
