"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = ({ handleNavClick }: { handleNavClick: (section: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 lg:px-8 relative overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-slate-900/50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex items-center min-h-[80vh]">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div
            className={`space-y-6 md:space-y-10 text-center lg:text-left transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs md:text-sm font-medium border border-emerald-500/20 shadow-lg">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                Available for frontend roles
              </div>

              {/* Title + Description */}
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight font-poppins">
                  Creative Frontend
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent font-semibold">
                    Engineer
                  </span>
                </h1>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  I craft visually stunning and highly functional web interfaces using{" "}
                  <strong className="text-emerald-400">React</strong>,{" "}
                  <strong className="text-emerald-400">TypeScript</strong>, and{" "}
                  <strong className="text-emerald-400">Tailwind CSS</strong>. From integrating APIs to perfecting
                  animations and accessibility — I focus on building user experiences that solve real problems.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={() => handleNavClick("work")}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                See My Projects
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                onClick={() => handleNavClick("contact")}
                className="w-full sm:w-auto text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 font-medium"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4 md:pt-6">
              <Link
                href="https://github.com/Phoebe-Emefa"
                target="_blank"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/phoebeemefaagbesi"
                target="_blank"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link
                href="mailto:phoebeemefa@gmail.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative mb-8 lg:mb-0 transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <Image
                  src="/images/phoebe-working.jpg"
                  alt="Phoebe Emefa Agbesi"
                  width={500}
                  height={600}
                  className="relative rounded-3xl object-cover w-full h-[300px] sm:h-[400px] lg:h-auto shadow-2xl border border-emerald-500/20"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
