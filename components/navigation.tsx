export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin py-stack-md mx-auto bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-stack-md">
        <span className="font-display-sm text-display-sm font-bold tracking-tighter text-primary">
          CONTROL TOWER
        </span>
        <div className="hidden md:flex items-center bg-surface-container-low px-stack-sm py-1 rounded-sm border border-border">
          <span className="w-2 h-2 rounded-full bg-success-muted mr-2 status-pulse" />
          <span className="font-label-caps text-label-caps text-on-surface-variant">NODE: MANIK_PRD_01</span>
        </div>
      </div>
      <div className="flex gap-gutter items-center">
        <div className="hidden md:flex gap-gutter">
          <a
            className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-label-caps hover:text-primary-container transition-colors duration-200"
            href="#systems"
          >
            SYSTEMS
          </a>
          <a
            className="text-on-surface-variant font-normal font-label-caps text-label-caps hover:text-primary-container transition-colors duration-200"
            href="#logs"
          >
            LOGS
          </a>
          <a
            className="text-on-surface-variant font-normal font-label-caps text-label-caps hover:text-primary-container transition-colors duration-200"
            href="#stack"
          >
            STACK
          </a>
          <a
            className="text-on-surface-variant font-normal font-label-caps text-label-caps hover:text-primary-container transition-colors duration-200"
            href="#contact"
          >
            SIGNAL
          </a>
        </div>
        <span className="material-symbols-outlined text-primary cursor-pointer hover:rotate-90 transition-transform duration-500">
          settings_input_component
        </span>
      </div>
    </nav>
  )
}
