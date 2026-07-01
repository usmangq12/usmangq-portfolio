const session: { cmd: string; output: string }[] = [
  { cmd: "whoami", output: "muhammad-usman" },
  { cmd: "cat role.txt", output: "Infrastructure & Platform Engineer" },
  { cmd: "uptime", output: "7+ years" },
  {
    cmd: "ls ./expertise/",
    output: "monorepo/  cicd/  auth/  security/  kyc/  observability/  devx/",
  },
  { cmd: "git log --oneline -1", output: "promoted to platform engineering" },
];

export function TerminalCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface font-mono text-sm shadow-lg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="ml-2 text-xs text-secondary">muhammad-usman — zsh</span>
      </div>

      <div className="relative p-4 sm:p-5">
        <div
          className="scanlines pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="relative space-y-3">
          {session.map(({ cmd, output }) => (
            <div key={cmd}>
              <div className="flex gap-2">
                <span className="select-none text-terminal">$</span>
                <span className="text-white">{cmd}</span>
              </div>
              <div className="mt-1 whitespace-pre-wrap break-words pl-4 text-white">
                {output}
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="select-none text-terminal">$</span>
            <span
              className="inline-block h-4 w-2 animate-blink bg-terminal"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
