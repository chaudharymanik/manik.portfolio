const entries = [
  {
    company: "EXL Service",
    role: "Technology Product Intern",
    location: "Noida, India · On-site",
    period: "[ MAY 2026 - PRESENT ]",
    markerClass: "bg-track-cloud",
    accentClass: "text-track-cloud",
    bullets: [
      "Owned translation of an agentic insurance automation product into 50+ business rules, validation checks, and developer-ready system specs, partnering directly with the product team.",
      <>
        Modeled end-to-end claim lifecycle workflows across submission, validation, processing, and assignment
        stages, documenting <span className="text-primary-container font-semibold">20+ decision points</span> and
        integration touchpoints.
      </>,
      "Defined data requirements and validation logic for automated FNOL processing across 4 P&C insurance product lines, improving readiness for backend workflow implementation.",
    ],
  },
  {
    company: "Introis Technologies",
    role: "Full-Stack Developer Intern",
    location: "Remote",
    period: "[ MAY 2025 - AUG 2025 ]",
    markerClass: "bg-track-fullstack",
    accentClass: "text-track-fullstack",
    bullets: [
      <>
        Owned end-to-end delivery of a warranty-claim platform for Exide Batteries, leading a team of 4 developers
        (React, Node.js, MySQL); shipped <span className="text-primary-container font-semibold">RBAC-enabled REST APIs</span>{" "}
        across 3 modules, reducing manual processing by 50%.
      </>,
      <>
        Automated ingestion of 40–50 claims/month via XML pipelines and cron schedulers, enforcing JSON schema
        validation with deterministic upserts —{" "}
        <span className="text-primary-container font-semibold">cutting reconciliation workload by 35%</span> and
        manual review time from 2 hrs/day to under 30 min.
      </>,
      "Authored 120+ test cases spanning 3 modules for QA automation of a hospital's financial data pipelines, accelerating regression testing by 40%, eliminating 15 critical bugs, and cutting analytics processing from 6 days to 30 min.",
    ],
  },
]

export default function DeploymentLog() {
  return (
    <section className="scroll-mt-32" id="logs">
      <div className="flex items-center gap-stack-md mb-stack-lg">
        <h2 className="font-display-sm text-display-sm text-on-background uppercase">Deployment Log</h2>
        <div className="h-px flex-grow bg-border" />
        <span className="font-label-caps text-label-caps text-outline">HISTORY_RECORDS</span>
      </div>

      <div className="relative pl-8 border-l border-border space-y-16">
        {entries.map((entry) => (
          <div key={entry.company} className="relative">
            <div className={`absolute -left-10 top-0 w-4 h-4 border-4 border-background rounded-sm ${entry.markerClass}`} />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background">{entry.company}</h3>
                <p className={`font-code-sm text-code-sm ${entry.accentClass}`}>{entry.role}</p>
                <p className="font-label-caps text-label-caps text-outline mt-1">{entry.location}</p>
              </div>
              <div className="font-label-caps text-label-caps text-outline bg-surface-container-low px-2 py-1 mt-2 md:mt-0">
                {entry.period}
              </div>
            </div>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`font-code-sm mt-1.5 ${entry.accentClass}`}>_</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
