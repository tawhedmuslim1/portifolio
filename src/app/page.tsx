import { Separator } from "@/components/ui/separator"
import ProjectsContainer from "@/components/ProjectsContainer"
import HeroBanner from "@/components/HeroBanner"
import HomeSkills from "@/components/HomeSkills"
import ContactButton from "@/components/ContactButton"
import AboutMeSection from "@/components/AboutMeSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ProcessSection from "@/components/ProcessSection"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* About Me Section */}
      <AboutMeSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Content Section */}
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Container (Server Component) */}
          <ProjectsContainer />
          
          {/* Skills Section (Client Component) */}
          <HomeSkills />
        </div>
      </div>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      <Separator className="my-8" />
      
      {/* Contact Button (Client Component) */}
      <div className="container mb-16">
        <ContactButton />
      </div>
    </div>
  )
}
