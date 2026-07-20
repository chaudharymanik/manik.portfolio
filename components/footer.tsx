export default function Footer() {
  return (
    <footer className="w-full py-stack-lg px-margin flex flex-col md:flex-row justify-between items-center gap-gutter border-t border-border bg-surface-container-lowest">
      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="font-label-caps text-label-caps text-primary">CONTROL TOWER // Manik Chaudhary</span>
        <span className="font-code-sm text-code-sm text-secondary">© 2026 SYSTEM_OPERATOR</span>
      </div>
      <div className="flex gap-gutter items-center">
        <a
          className="font-code-sm text-code-sm text-on-surface-variant hover:text-primary hover:underline transition-all"
          href="https://github.com/chaudharymanik"
          target="_blank"
          rel="noopener noreferrer"
        >
          TERMINAL
        </a>
        <a
          className="font-code-sm text-code-sm text-on-surface-variant hover:text-primary hover:underline transition-all"
          href="/Manik_Chaudhary_resume.pdf"
          download
        >
          MANIFEST
        </a>
        <a
          className="font-code-sm text-code-sm text-on-surface-variant hover:text-primary hover:underline transition-all"
          href="#contact"
        >
          SIGNAL
        </a>
      </div>
      <div className="flex gap-gutter">
        <a href="https://linkedin.com/in/manikchaudhary" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
            hub
          </span>
        </a>
        <a href="mailto:maniksingh873@gmail.com">
          <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
            mail
          </span>
        </a>
        <a href="https://github.com/chaudharymanik" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
            code
          </span>
        </a>
      </div>
    </footer>
  )
}
