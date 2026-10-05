"use client";

import { FileText } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { missions } from "@/lib/data";

export default function Missions() {
  return (
    <Section id="missions">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Missions</h2>
        <p className="mt-2 text-secondary">
          Problems I was brought in to fix, and the write-ups behind them.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
        {missions.map((mission) => (
          <RevealItem key={mission.title} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition duration-200 hover:border-accent hover:shadow-glow">
              <h3 className="font-semibold text-white">{mission.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
                {mission.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {mission.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-background px-2 py-0.5 text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {mission.articles.length > 0 ? (
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {mission.articles.map((article) => (
                    <li key={article.url}>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:underline"
                      >
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 border-t border-border pt-4 text-xs italic text-secondary/70">
                  Write-up in progress
                </p>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
