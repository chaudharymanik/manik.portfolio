"use client"

import { useState } from "react"

type Track = "fullstack" | "cloud" | "ai"

const TRACK_DOT: Record<Track, string> = {
  fullstack: "bg-track-fullstack",
  cloud: "bg-track-cloud",
  ai: "bg-track-ai",
}

const FILTERS: { key: "all" | Track; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "fullstack", label: "FULL-STACK" },
  { key: "cloud", label: "CLOUD" },
  { key: "ai", label: "AI SYSTEMS" },
]

const projects = [
  {
    name: "CheckPointAI",
    subtitle: "Permissioned LLM Agent Framework",
    tracks: ["ai", "fullstack", "cloud"] as Track[],
    meta: "43 tests · 9 nodes",
    status: "STATUS: STABLE",
    description: (
      <>
        Architected a permissioned LLM agent (LangGraph, FastAPI, PostgreSQL) with a{" "}
        <span className="text-primary font-bold">3-tier risk engine across 5 tools</span>, auto-executing low-risk
        calls and halting high-risk ones for human approval. Distributed tracing via OpenTelemetry/Jaeger spans 9
        agent nodes; containerized 5-service backend with a Next.js frontend and Clerk auth.
      </>
    ),
    tags: ["LANGGRAPH", "FASTAPI", "POSTGRESQL"],
    github: "https://github.com/chaudharymanik/CheckPointAI",
    demo: null,
    span: false,
  },
  {
    name: "CostGuardian",
    subtitle: "Multi-Tenant AWS Cost & Security SaaS",
    tracks: ["cloud"] as Track[],
    meta: "108 tests · $0/mo",
    status: "STATUS: ACTIVE",
    description: (
      <>
        Multi-tenant AWS cost/security SaaS running{" "}
        <span className="text-primary font-bold">15 automated detectors across 6 AWS services</span> (EC2, S3, IAM,
        CloudTrail, RDS, Lambda), gated by a two-layer safety model — human approval plus an independent policy
        engine — using scoped, external-ID cross-account IAM roles instead of stored credentials. Live in production
        on AWS's Always-Free tier.
      </>
    ),
    tags: ["PYTHON", "AWS LAMBDA", "TERRAFORM"],
    github: "https://github.com/chaudharymanik/CostGuardian",
    demo: "https://cost-guardian.vercel.app/",
    span: false,
  },
  {
    name: "RAG Chat System",
    subtitle: "Document-Grounded RAG Chat",
    tracks: ["fullstack", "ai"] as Track[],
    meta: "p50 430-630ms",
    metaAccent: "OPT: 37.8% LOWER TTFT",
    description: (
      <>
        Full-stack RAG chat system that answers questions grounded only in user-uploaded documents, using per-session
        namespaced vector search and a relevance-score filter to prevent hallucinated answers from irrelevant
        matches. Measured <span className="text-primary font-bold">+200% answer-quality uplift</span> over a
        no-context baseline; load-tested at 50 concurrent sessions.
      </>
    ),
    tags: ["NEXT.JS", "VERCEL AI SDK", "UPSTASH VECTOR", "REDIS"],
    github: "https://github.com/chaudharymanik/rag-chat-system",
    demo: "https://rag-chat-system-tau.vercel.app/",
    span: true,
    pipeline: true,
  },
  {
    name: "SnapSend",
    subtitle: "Direct-to-S3 File Transfer Platform",
    tracks: ["fullstack", "cloud"] as Track[],
    meta: "UPLOAD LATENCY",
    metaAccent: "OPT: 70% LOWER LATENCY",
    description: (
      <>
        Led development of a file-sharing platform (Next.js, Express.js, AWS S3, MongoDB) with drag-and-drop uploads
        and progress tracking. Analyzed transfer bottlenecks and built a{" "}
        <span className="text-primary font-bold">pre-signed URL workflow for direct browser-to-S3 transfers</span>,
        cutting upload latency by 70%. Shipped expiring share links (1 hr–1 week), S3 lifecycle cleanup, rate
        limiting, and Helmet.js security hardening.
      </>
    ),
    tags: ["NEXT.JS", "EXPRESS.JS", "AWS S3", "MONGODB"],
    github: "https://github.com/chaudharymanik/SnapSend",
    demo: "https://snap-send.vercel.app/",
    span: true,
  },
]

export default function Systems() {
  const [filter, setFilter] = useState<"all" | Track>("all")

  return (
    <section className="scroll-mt-32" id="systems">
      <div className="flex items-center gap-stack-md mb-stack-sm">
        <h2 className="font-display-sm text-display-sm text-on-background uppercase">Systems Built</h2>
        <div className="h-px flex-grow bg-border" />
        <span className="font-label-caps text-label-caps text-outline">SRV_MONITOR.v2</span>
      </div>

      <div className="sticky top-20 z-40 bg-background/90 backdrop-blur-sm py-4 mb-stack-lg border-b border-border flex gap-4 font-label-caps text-label-caps">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`pb-1 transition-colors duration-200 ${
              filter === f.key
                ? "text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary-container"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {projects.map((project) => {
          const dimmed = filter !== "all" && !project.tracks.includes(filter)
          return (
            <div
              key={project.name}
              className={`project-card group bg-surface border border-border p-stack-lg transition-all duration-300 hover:border-primary/50 relative overflow-hidden ${
                project.span ? "md:col-span-2" : ""
              } ${dimmed ? "dimmed" : ""}`}
            >
              <div className="absolute top-0 right-0 p-stack-sm flex gap-1 z-10">
                {project.tracks.map((t) => (
                  <span key={t} className={`w-2 h-2 rounded-sm ${TRACK_DOT[t]}`} />
                ))}
              </div>

              <div className={project.pipeline ? "flex flex-col md:flex-row gap-stack-lg" : ""}>
                <div className="flex-1">
                  <header className="flex justify-between items-start mb-stack-md">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary mb-1">{project.name}</h3>
                      <p className="font-label-caps text-label-caps text-outline">{project.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-code-sm text-code-sm text-on-surface-variant">{project.meta}</div>
                      <div
                        className={`font-code-sm text-code-sm ${
                          project.metaAccent ? "text-primary" : "text-success-muted"
                        }`}
                      >
                        {project.metaAccent ?? project.status}
                      </div>
                    </div>
                  </header>

                  <div className="space-y-stack-sm mb-stack-md">
                    <p className="font-body-md text-on-surface-variant leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-stack-md">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-border rounded-sm font-label-caps text-[10px] text-outline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-stack-sm py-1 border border-border text-on-surface-variant font-label-caps text-[10px] hover:border-primary/50 hover:text-primary transition-colors duration-200"
                    >
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      GITHUB
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-stack-sm py-1 border border-primary/40 bg-primary/10 text-primary font-label-caps text-[10px] hover:bg-primary/20 transition-colors duration-200"
                      >
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>

                {project.pipeline && (
                  <div className="md:w-1/3 flex flex-col justify-center bg-background border border-border p-stack-md font-code-sm text-code-sm text-on-surface-variant">
                    <p className="text-outline mb-2">// PIPELINE</p>
                    <p>
                      UPLOAD <span className="text-track-ai">→</span> CHUNK <span className="text-track-ai">→</span>{" "}
                      EMBED
                    </p>
                    <p>
                      RETRIEVE <span className="text-track-ai">→</span> FILTER{" "}
                      <span className="text-track-ai">→</span> STREAM
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
