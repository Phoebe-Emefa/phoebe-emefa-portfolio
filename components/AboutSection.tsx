import { Code, MapPin, Star } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-slate-800 text-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">About Me</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mt-4 mx-auto rounded-full green-glow"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            {/* Main Text */}
            <div className="lg:col-span-2 space-y-8 text-[1.05rem] leading-relaxed text-slate-300">
              <p className="text-xl text-slate-200 font-light leading-relaxed">
                Hi, I'm <span className="font-medium text-emerald-400">Phoebe Emefa Agbesi</span>. I'm a frontend developer
                who has recently begun exploring the exciting worlds of backend and mobile development.
              </p>

              <p>
                My tech journey started with frontend, turning ideas into beautiful, interactive web experiences. But
                I have grown curious about what lies beneath the surface: how servers work, how data flows, and how mobile
                apps come alive.
              </p>

              <p>
                These days, I am focused on learning backend technologies and building mobile apps using{" "}
                <span className="font-medium text-emerald-400">React Native</span>. It is about expanding my toolkit,
                stretching my skills, and crafting seamless user experiences across web and mobile.
              </p>

              <p>
                Whether it is designing intuitive UIs or writing API logic, I am excited about building clean, meaningful,
                and delightful digital products.
              </p>

              <p className="text-lg text-emerald-400 font-medium pt-4">
                I am not just building apps. I'm building a future where I can solve real problems with technology.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts Card */}
              <div className="luxury-card rounded-3xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Quick Facts</h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    Based in Accra, Ghana
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-emerald-500" />
                    Passionate about clean, user-first design
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-4 h-4 text-emerald-500" />
                    Learning backend & React Native
                  </div>
                </div>
              </div>

              {/* Current Focus Card */}
              <div className="bg-gradient-to-br from-emerald-500/10 via-slate-700 to-slate-800 border border-emerald-500/20 rounded-3xl p-6 shadow-lg green-glow">
                <h3 className="text-lg font-semibold text-white mb-3">Currently</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Deepening my backend knowledge and building mobile experiences with React Native — growing into a
                  thoughtful full-stack developer.
                </p>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="max-w-3xl mx-auto text-center pt-8">
            <p className="text-slate-300 leading-relaxed text-base">
              From browser to backend to mobile, I'm here to create — with care, clarity, and a whole lot of curiosity.
            </p>
            <p className="text-xl text-emerald-400 font-medium mt-4">Let's build something beautiful. ✨</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
