"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Send form data to our backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'phoebeemefa@gmail.com'
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                  {/* <div className="flex items-center group">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+233 2495 135 27</p>
                    </div>
                  </div> */}
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <Link href="https://github.com/Phoebe-Emefa" target="_blank" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/phoebeemefaagbesi" target="_blank" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="luxury-card p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
              
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400">
                  Sorry, there was an error sending your message. Please try again or contact me directly at phoebeemefa@gmail.com
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full px-6 py-4 border border-slate-600 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none bg-slate-700/50 text-white placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-6 py-4 border border-slate-600 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none bg-slate-700/50 text-white placeholder-slate-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-6 py-4 border border-slate-600 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none resize-none bg-slate-700/50 text-white placeholder-slate-400 transition-all duration-300"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl green-glow"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
