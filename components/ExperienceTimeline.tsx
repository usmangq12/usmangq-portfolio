import { Section } from "@/components/ui/Section";
import { experiences } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <Section id="experience">
      <h2 className="text-2xl font-bold text-white">Experience</h2>

      <ul className="mt-8 space-y-10">
        {experiences.map((entry) => (
          <li key={entry.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-semibold text-white">{entry.role}</h3>
              <time className="whitespace-nowrap text-xs text-secondary">
                {entry.period}
              </time>
            </div>
            <p className="mt-0.5 text-sm">
              <span className="text-accent-light">{entry.company}</span>
              <span className="text-secondary"> · {entry.companyDescription}</span>
            </p>
            {entry.startRole && (
              <p className="mt-1 text-xs italic text-secondary">
                Started as {entry.startRole}
              </p>
            )}

            <ul className="mt-3 space-y-1.5">
              {entry.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-secondary">
                  <span aria-hidden="true">–</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-xs text-secondary">
              {entry.tags.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
