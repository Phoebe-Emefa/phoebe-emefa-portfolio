import { Button } from "./ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 bg-slate-800 text-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">Let's Work Together</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mt-4 mx-auto rounded-full green-glow"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mt-8">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">phoebeemefa@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+233 2495 135 27</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Pokuase, Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="luxury-card p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-4 border border-slate-600 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none bg-slate-700/50 text-white placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 border border-slate-600 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none bg-slate-700/50 text-white placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 border border-slate-600 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none resize-none bg-slate-700/50 text-white placeholder-slate-400 transition-all duration-300"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl green-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
