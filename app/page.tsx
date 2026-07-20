import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Systems from "@/components/systems"
import DeploymentLog from "@/components/deployment-log"
import StackManifest from "@/components/stack-manifest"
import ProfilePanel from "@/components/profile-panel"
import ContactPanel from "@/components/contact-panel"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <main className="max-w-container-max mx-auto px-margin py-20 space-y-32">
        <Systems />
        <DeploymentLog />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <StackManifest />
          <ProfilePanel />
        </div>
        <ContactPanel />
      </main>
      <Footer />
    </div>
  )
}
