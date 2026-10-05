import { Section } from "@/components/ui/Section";
import { missions } from "@/lib/data";

export default function Missions() {
  return (
    <Section id="missions">
      <h2 className="text-2xl font-bold text-white">Missions</h2>
      <p className="mt-2 text-secondary">
        Problems I was brought in to fix, and the write-ups behind them.
      </p>

      <ul className="mt-8 space-y-6">
        {missions.map((mission) => (
          <li key={mission.title}>
            <h3 className="font-semibold text-white">{mission.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-secondary">
              {mission.summary}
            </p>
            <p className="mt-1.5 text-xs text-secondary">
              {mission.tags.join(" · ")}
            </p>

            {mission.articles.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {mission.articles.map((article) => (
                  <li key={article.url} className="text-sm">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent-light hover:underline"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs italic text-secondary/70">
                Write-up in progress
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
