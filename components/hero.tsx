import NodeGraphBackground from "@/components/node-graph-background"
import CountUpStat from "@/components/count-up-stat"

export default function Hero() {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-border">
      <NodeGraphBackground />

      <div className="relative z-10 text-center px-margin">
        <div className="inline-block mb-stack-md px-stack-md py-1 border border-status-amber bg-status-amber/10">
          <span className="font-label-caps text-label-caps text-status-amber flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">sensors</span>
            STATUS: OPEN TO OPPORTUNITIES
          </span>
        </div>

        <h1 className="font-display-lg text-display-lg md:text-[80px] uppercase tracking-tight mb-stack-sm text-on-background">
          Manik Chaudhary
        </h1>

        <p className="font-code-sm text-code-sm md:text-body-lg text-primary-container tracking-widest uppercase mb-4">
          Full-Stack · Cloud · AI Systems Engineer
        </p>

        <div className="flex justify-center gap-6 font-label-caps text-label-caps text-on-surface-variant mb-stack-lg">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-track-fullstack" /> FULL-STACK
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-track-cloud" /> CLOUD
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-track-ai" /> AI SYSTEMS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-gutter justify-center items-center mb-stack-lg">
          <a
            href="#systems"
            className="px-stack-lg py-stack-sm border border-primary bg-primary/10 text-primary font-label-caps text-label-caps hover:bg-primary/20 transition-colors duration-200"
          >
            VIEW MY WORK
          </a>
          <a
            href="/Manik_Chaudhary_resume.pdf"
            download
            className="px-stack-lg py-stack-sm border border-border bg-surface-container-low text-on-background font-label-caps text-label-caps hover:border-primary/50 hover:text-primary transition-colors duration-200"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter max-w-4xl mx-auto mt-stack-lg border-t border-border/30 pt-stack-lg">
          <CountUpStat value={200} suffix="%" label="Quality Gain" />
          <CountUpStat value={37.8} suffix="%" label="TTFT Reduc." decimals={1} />
          <CountUpStat value={430} suffix="ms" label="p50 Latency" />
          <CountUpStat value={35} suffix="%" label="Workload Cut" />
        </div>
      </div>

      <div className="absolute bottom-margin left-margin font-code-sm text-code-sm text-outline animate-bounce flex items-center gap-2">
        <span className="material-symbols-outlined">expand_more</span>
        SCROLL_FOR_TELEMETRY
      </div>
    </header>
  )
}
