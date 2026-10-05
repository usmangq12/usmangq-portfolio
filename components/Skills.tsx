import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-2xl font-bold text-white">Technical Skills</h2>

      <ul className="mt-8 space-y-3">
        {skillGroups.map((group) => (
          <li key={group.title} className="text-sm leading-relaxed">
            <span className="font-semibold text-white">{group.title}:</span>{" "}
            <span className="text-secondary">{group.skills.join(", ")}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
