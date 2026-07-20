const contactDetails = [
  {
    label: "EMAIL",
    value: "maniksingh873@gmail.com",
    href: "mailto:maniksingh873@gmail.com",
    icon: "mail",
  },
  {
    label: "MOBILE",
    value: "+91 9810190643",
    href: "tel:+919810190643",
    icon: "call",
  },
  {
    label: "LOCATION",
    value: "Noida, India",
    href: null,
    icon: "location_on",
  },
]

const socials = [
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/manikchaudhary",
    href: "https://linkedin.com/in/chaudharymanik",
    icon: "hub",
  },
  {
    label: "GITHUB",
    value: "github.com/chaudharymanik",
    href: "https://github.com/chaudharymanik",
    icon: "code",
  },
]

export default function ContactPanel() {
  return (
    <section className="scroll-mt-32" id="contact">
      <div className="flex items-center gap-stack-md mb-stack-lg">
        <h2 className="font-display-sm text-display-sm text-on-background uppercase">Transmission Channel</h2>
        <div className="h-px flex-grow bg-border" />
        <span className="font-label-caps text-label-caps text-outline">CONTACT.v1</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
        {contactDetails.map((item) => {
          const Tag = item.href ? "a" : "div"
          return (
            <Tag
              key={item.label}
              {...(item.href ? { href: item.href } : {})}
              className="flex items-center gap-stack-md bg-surface border border-border p-stack-lg hover:border-primary/50 transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-primary text-[28px]">{item.icon}</span>
              <div>
                <div className="font-label-caps text-label-caps text-outline mb-1">{item.label}</div>
                <div className="font-code-sm text-code-sm text-on-background">{item.value}</div>
              </div>
            </Tag>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-stack-md bg-surface-container-low border border-border p-stack-lg hover:border-primary/50 transition-colors duration-200 group"
          >
            <span className="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </span>
            <div>
              <div className="font-label-caps text-label-caps text-outline mb-1">{item.label}</div>
              <div className="font-code-sm text-code-sm text-primary-container">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
