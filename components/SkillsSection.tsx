import { Code } from "lucide-react"

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">Skills & Technologies</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mt-4 mx-auto rounded-full green-glow"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Skills - Main Focus */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-8 rounded-3xl shadow-lg border border-emerald-500/20 green-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Core Technologies</h3>
                    <p className="text-emerald-400 text-sm font-medium">
                      Expert Level – The Foundation of Every Great User Experience
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-slate-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-8 rounded-3xl shadow-lg border border-emerald-500/20 green-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-emerald-400 font-bold text-lg">⚛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Frameworks & Libraries</h3>
                    <p className="text-emerald-400 text-sm font-medium">
                      Advanced Proficiency – Building Scalable, High-Performance Apps
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "React – Crafting dynamic, component-driven UIs",
                    "Next.js – Server-side rendering & optimized performance",
                    "React Native – Cross-platform mobile apps with seamless UX",
                    "Tailwind CSS – Utility-first styling for rapid, maintainable design",
                    "ShadCN UI & Radix UI – Accessible, customizable component libraries",
                    "React Hook Form & Formik – Robust form management & validation",
                    "Zod & Yup – Reliable schema validation for flawless UX",
                    "Framer Motion – Smooth, engaging animations that delight users",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-slate-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="luxury-card p-6 rounded-2xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-emerald-400 font-bold">📦</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">State & Data Management</h3>
                  </div>
                  <div className="space-y-2">
                    {[
                      "React Context API – Lightweight and efficient global state",
                      "React Query (TanStack Query) – Intelligent data fetching and caching",
                      "Zustand (optional) – Simplified, scalable state management",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        <span className="text-slate-300 text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="luxury-card p-6 rounded-2xl shadow-md">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-emerald-400 font-bold">🛠️</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">Tools, CMS & Workflow</h3>
                    </div>
                    <div className="space-y-2">
                      {[
                        "Git & GitHub – Version control with collaborative workflow",
                        "Sanity.io – Headless CMS for flexible content management",
                        "Jira – Agile project management and issue tracking",
                        "Sprint Planning & Scrum – Agile methodologies for efficient delivery",
                        "REST APIs & GraphQL – Seamless frontend-backend communication",
                      ].map((tool) => (
                        <div key={tool} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          <span className="text-slate-300 text-sm font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills - Secondary Focus */}
            <div className="space-y-8">
              <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-slate-400 font-bold">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Core Backend Skills</h3>
                    <p className="text-slate-400 text-xs">
                      Currently Learning – Growing Into a Well-Rounded Full-Stack Developer
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {["Node.js", "Express.js", "NestJS"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-slate-400 font-bold">🗄️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Databases & Backend Services</h3>
                </div>
                <div className="space-y-2">
                  {["MongoDB", "Mongoose", "Supabase", "Firebase"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-slate-400 font-bold">🛠️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">ORM / ODM & Tools</h3>
                </div>
                <div className="space-y-2">
                  {["Prisma (SQL databases)", "Mongoose (MongoDB)"].map((tool) => (
                    <div key={tool} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></div>
                      <span className="text-slate-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Journey Card */}
              <div className="bg-gradient-to-br from-blue-500/10 via-slate-700 to-slate-800 border border-blue-500/20 rounded-3xl p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Learning Journey</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Expanding into backend development to become a well-rounded full-stack developer while maintaining my
                  frontend expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
