const columns = [
  {
    label: "FULL-STACK",
    dotClass: "bg-track-fullstack",
    textClass: "text-track-fullstack",
    skills: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "CLOUD",
    dotClass: "bg-track-cloud",
    textClass: "text-track-cloud",
    skills: ["AWS (S3, Lambda)", "Docker", "Terraform", "PostgreSQL", "MySQL", "Redis", "Vercel"],
  },
  {
    label: "AI SYSTEMS",
    dotClass: "bg-track-ai",
    textClass: "text-track-ai",
    skills: ["LangGraph", "Agentic AI", "RAG Pipelines", "LLM Integration", "Vector Databases"],
  },
]

const fundamentals = ["Python", "C/C++", "JavaScript", "TypeScript", "Data Structures & Algorithms", "System Design"]

export default function StackManifest() {
  return (
    <section className="md:col-span-2 bg-surface border border-border p-stack-lg flex flex-col" id="stack">
      <div className="flex justify-between items-center mb-stack-lg">
        <h2 className="font-display-sm text-display-sm text-on-background uppercase">Stack Manifest</h2>
        <span className="material-symbols-outlined text-outline">terminal</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-lg mb-stack-lg flex-grow">
        {columns.map((col) => (
          <div key={col.label}>
            <h4
              className={`font-label-caps text-label-caps mb-stack-sm border-b border-border pb-1 flex items-center gap-2 ${col.textClass}`}
            >
              <span className={`w-1.5 h-1.5 rounded-sm ${col.dotClass}`} />
              {col.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {col.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-background border border-border font-code-sm text-on-surface-variant"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-stack-md border-t border-border">
        <h4 className="font-label-caps text-label-caps text-outline mb-stack-sm">FUNDAMENTALS</h4>
        <div className="flex flex-wrap gap-2">
          {fundamentals.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-background border border-border font-code-sm text-on-surface-variant"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
