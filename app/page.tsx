"use client"

import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import ExperienceSection from "@/components/ExperienceSection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"

export default function Portfolio() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar handleNavClick={handleNavClick} />

      <HeroSection handleNavClick={handleNavClick} />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ExperienceSection />

      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Phoebe Emefa Agbesi. Designed and built with care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
