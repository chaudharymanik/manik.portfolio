const certifications = [
  "AWS Certified Associate Developer",
  "Web Development Bootcamp – Udemy",
  "Data Structures and Algorithms (C/C++) – Udemy",
  "Deloitte Australia – Data Analytics & Visualization Job Simulation (Forage)",
]

const achievements = [
  "Mozilla Firefox Club, VIT – Senior Core Member; led and mentored a team of designers",
  "Competed across multiple VIT-wide hackathons",
]

export default function ProfilePanel() {
  return (
    <section className="bg-surface border border-border p-stack-lg space-y-stack-lg">
      <div>
        <h2 className="font-label-caps text-label-caps text-primary mb-stack-md uppercase border-b border-border pb-1 flex justify-between items-center">
          EDUCATION
          <span className="material-symbols-outlined text-[16px]">school</span>
        </h2>
        <div className="space-y-4">
          <div>
            <p className="font-headline-md text-body-lg font-bold text-on-background">
              B.Tech, Computer Science and Engineering (Core)
            </p>
            <p className="font-code-sm text-code-sm text-outline">
              Vellore Institute of Technology (VIT), Vellore · Aug 2023 – Jul 2027 (Expected)
            </p>
            <p className="font-label-caps text-label-caps text-success-muted mt-1">CGPA: 8.76/10 · No backlogs</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-label-caps text-label-caps text-primary mb-stack-md uppercase border-b border-border pb-1 flex justify-between items-center">
          CERTIFICATIONS
          <span className="material-symbols-outlined text-[16px]">verified</span>
        </h2>
        <ul className="space-y-2 font-code-sm text-code-sm text-on-surface-variant">
          {certifications.map((cert) => (
            <li key={cert}>&gt; {cert}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-label-caps text-label-caps text-primary mb-stack-md uppercase border-b border-border pb-1 flex justify-between items-center">
          ACHIEVEMENTS
          <span className="material-symbols-outlined text-[16px]">emoji_events</span>
        </h2>
        <ul className="space-y-2 font-code-sm text-code-sm text-on-surface-variant">
          {achievements.map((item) => (
            <li key={item}>&gt; {item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
