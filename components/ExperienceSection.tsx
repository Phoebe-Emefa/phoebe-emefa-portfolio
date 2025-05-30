import { Calendar, MapPin } from "lucide-react"

const ExperienceSection = () => {
  const experience = [
    {
      role: "Frontend Developer",
      company: "Peacemaker",
      period: "Oct 2023 - Present",
      location: "Remote",
      description: "Building comprehensive admin dashboards and analytics tools that serve thousands of users daily.",
    },
    {
      role: "Technical Team Lead",
      company: "eHealth Technologies LTD",
      period: "Jun 2023 - May 2025",
      location: "Remote",
      description: "Led frontend development team while architecting scalable healthcare management solutions.",
    },
    {
      role: "Frontend Developer",
      company: "Complete Farmer Limited",
      period: "Aug 2020 - Feb 2023",
      location: "Accra, Ghana",
      description:
        "Developed precision farming tools that help farmers optimize crop yields and manage resources effectively.",
    },
  ]

  return (
    <section id="experience" className="py-28 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">Experience</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mt-4 mx-auto rounded-full green-glow"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mt-8">
              My professional journey building impactful digital solutions across healthcare, agriculture, and analytics
              platforms.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div key={exp.company} className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
                {/* Company & Role Info */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-500/10 via-slate-700 to-slate-800 border border-emerald-500/20 rounded-3xl p-6 shadow-lg green-glow">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                    <p className="text-emerald-400 font-semibold text-lg mb-4">{exp.company}</p>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="luxury-card rounded-3xl p-8 shadow-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">Role Overview</h4>
                    <p className="text-slate-300 leading-relaxed text-base">{exp.description}</p>
                  </div>

                  {/* Additional context based on company */}
                  {exp.company === "Peacemaker" && (
                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-lg">
                      <h5 className="text-base font-semibold text-white mb-3">Key Achievements</h5>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Built real-time analytics dashboards serving thousands of users</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Implemented advanced data visualization with interactive charts</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Optimized performance for complex business intelligence tools</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {exp.company === "eHealth Technologies LTD" && (
                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-lg">
                      <h5 className="text-base font-semibold text-white mb-3">Leadership & Impact</h5>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Led frontend development team across multiple healthcare projects</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Architected scalable solutions for healthcare management systems</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Integrated mobile and web platforms for seamless user experience</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {exp.company === "Complete Farmer Limited" && (
                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-lg">
                      <h5 className="text-base font-semibold text-white mb-3">Innovation & Growth</h5>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Developed precision farming tools with satellite data integration</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Built weather analytics and soil health monitoring systems</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span>Helped farmers optimize crop yields through data-driven insights</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
