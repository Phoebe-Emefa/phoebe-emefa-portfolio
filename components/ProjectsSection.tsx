"use client"

import { useState, useCallback } from "react"
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Activity,
  TrendingUp,
  Database,
  Images,
  X,
  ArrowUpRight,
  Code,
  ShoppingCart,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

const ProjectsSection = () => {
  const [activeScreenshot, setActiveScreenshot] = useState<{ [key: number]: number }>({})
  const [showScreenshots, setShowScreenshots] = useState<{ [key: number]: boolean }>({ 0: true, 1: true })

  const nextScreenshot = useCallback((projectIndex: number) => {
    setActiveScreenshot((prev) => {
      const currentScreenshot = prev[projectIndex] || 0
      const maxScreenshots = projects[projectIndex].screenshots.length - 1
      return {
        ...prev,
        [projectIndex]: currentScreenshot >= maxScreenshots ? 0 : currentScreenshot + 1,
      }
    })
  }, [])

  const prevScreenshot = useCallback((projectIndex: number) => {
    setActiveScreenshot((prev) => {
      const currentScreenshot = prev[projectIndex] || 0
      const maxScreenshots = projects[projectIndex].screenshots.length - 1
      return {
        ...prev,
        [projectIndex]: currentScreenshot <= 0 ? maxScreenshots : currentScreenshot - 1,
      }
    })
  }, [])

  const setScreenshot = useCallback((projectIndex: number, screenshotIndex: number) => {
    setActiveScreenshot((prev) => ({
      ...prev,
      [projectIndex]: screenshotIndex,
    }))
  }, [])

  const toggleScreenshots = useCallback((projectIndex: number) => {
    setShowScreenshots((prev) => {
      const newState = {
        ...prev,
        [projectIndex]: !prev[projectIndex],
      }
      console.log(`Toggling screenshots for project ${projectIndex}:`, newState[projectIndex])
      return newState
    })
  }, [])

  const projects = [
    {
      title: "Talkative Mom Website",
      subtitle: "Safe Platform for Mothers & Community Building",
      description:
        "A comprehensive platform where mothers can safely share their journeys, seek advice, and connect with credible brands. Features studio booking, e-commerce capabilities, blogging system, and robust admin management for seamless community engagement.",
      mainImage: "/images/home.png",
      screenshots: [
        {
          image: "/images/studio.png",
          title: "Studio Booking System",
          description: "Easy-to-use booking interface for studio sessions",
        },
        {
          image: "/images/shop.png",
          title: "E-commerce Store",
          description: "Integrated shopping experience for mothers",
        },
        {
          image: "/images/blogs.png",
          title: "Blogging Platform",
          description: "Share stories and experiences with the community",
        },
        {
          image: "/images/admin.png",
          title: "Admin Dashboard",
          description: "Comprehensive management system for administrators",
        },
      ],
      tech: ["Next.js", "Tailwind CSS", "Sanity", "Shadcn", "Supabase", "Paystack", "Nodemailer"],
      features: [
        {
          icon: Users,
          title: "Studio Booking",
          description: "Seamless booking system for studio sessions with payment integration",
        },
        {
          icon: BarChart3,
          title: "E-commerce Integration",
          description: "Full-featured online shopping experience with secure payment processing",
        },
        {
          icon: Activity,
          title: "Blogging Platform",
          description: "Content management for community stories",
        },
        {
          icon: Shield,
          title: "Admin Management",
          description: "Comprehensive admin tools and email notifications",
        },
      ],
      hasLiveDemo: true,
      githubUrl: "#",
      category: "Community Platform",
      year: "2024",
    },
    {
      title: "Petite Elise Preschool",
      subtitle: "Comprehensive Preschool Management Platform",
      description:
        "A comprehensive platform where parents can enroll their children in various school programs, shop for school items, join clubs, and manage their child's educational journey. Features include child registration for various programs, admin management, coding club for kids, and an integrated shop page.",
      mainImage: "/images/pe-home.png",
      screenshots: [
        {
          image: "/images/pe-registration.png",
          title: "Child Registration",
          description: "Easy enrollment system for various school programs",
        },
        {
          image: "/images/pe-admin.png",
          title: "Admin Dashboard",
          description: "Comprehensive management system for administrators",
        },
        {
          image: "/images/club.png",
          title: "Coding Club",
          description: "Interactive coding activities for children",
        },
        {
          image: "/images/pe-shop.png",
          title: "School Shop",
          description: "Integrated shopping for school supplies and items",
        },
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "Supabase", "Paystack"],
      features: [
        {
          icon: Users,
          title: "Child Registration System",
          description: "Comprehensive enrollment for various school programs with payment integration",
        },
        {
          icon: Shield,
          title: "Admin Management",
          description: "Full administrative control and oversight",
        },
        {
          icon: Code,
          title: "Coding Club for Kids",
          description: "Interactive programming activities for children",
        },
        {
          icon: ShoppingCart,
          title: "School Shop",
          description: "Integrated shopping experience for school items with secure payment processing",
        },
      ],
      hasLiveDemo: true,
      githubUrl: "#",
      category: "Educational Platform",
      year: "2024",
    },
 
  ]

  // Other smaller projects
  const otherProjects = [

    {
      title: "Roots and Routes",
      url: "https://roots-and-routes-sand.vercel.app",
      tech: ["Next.js", "TypeScript", "Ant Design", "Paystack", "Nodemailer", "Sanity", "Supabase"],
    },
    {
      title: "First Finance",
      url: "https://www.firstfinancecompany.com",
      tech: ["Astro", "Sanity", "Radix UI", "Tailwind CSS"],
    },
    {
      title: "Talent Empowerment Foundation",
      url: "https://www.talentsempowermentfoundation.org",
      tech: ["Next JS", "Sanity", "Chakra UI", "Typescript"],
    },
    {
      title: "Bishop Oti Boateng",
      url: "https://home.pastoroti.org",
      tech: ["Next JS", "Next UI", "Typescript"],
    },
  ]

  return (
    <section id="work" className="py-28 bg-slate-800 text-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">Featured Work</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mt-4 mx-auto rounded-full green-glow"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mt-8">
              Explore my portfolio of projects that showcase my expertise in building scalable, user-focused
              applications across various industries.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-32">
            {projects.map((project, projectIndex) => {
              const currentScreenshot = activeScreenshot[projectIndex] || 0
              const screenshotsVisible = Boolean(showScreenshots[projectIndex])

              return (
                <div key={`project-${projectIndex}`} className="group">
                  {/* Project Header */}
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-700/50 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/20">
                      {project.category}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-xl text-emerald-400 font-medium mb-6">{project.subtitle}</p>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Main Project Showcase */}
                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
                    {/* Project Details - Left Column */}
                    <div className="lg:col-span-1 space-y-8">
                      {/* Key Features */}
                      <div className="luxury-card rounded-3xl p-8 shadow-lg">
                        <h4 className="text-xl font-semibold text-white mb-6">Key Features</h4>
                        <div className="space-y-6">
                          {project.features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                              <div key={`feature-${index}`} className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-white mb-1">{feature.title}</h5>
                                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="bg-gradient-to-br from-emerald-500/10 via-slate-700 to-slate-800 border border-emerald-500/20 rounded-3xl p-6 shadow-lg">
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={`tech-${techIndex}`}
                              variant="secondary"
                              className="bg-slate-700/50 text-emerald-400 hover:bg-slate-600/50 px-3 py-1 text-xs font-medium rounded-full border border-emerald-500/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                                             {/* Action Buttons */}
                       <div className="space-y-3">
                         {project.hasLiveDemo && (
                           <Link
                             href={project.title === "Petite Elise Preschool" ? "https://petiteelise.com" : "https://talkativemom.com/"}
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl green-glow">
                               <ExternalLink className="w-4 h-4 mr-2" />
                               Live Demo
                             </Button>
                           </Link>
                         )}
                       </div>
                    </div>

                    {/* Project Images & Screenshots - Right Columns */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Main Image */}
                      <div className="relative group/image">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 rounded-3xl blur-2xl opacity-30 group-hover/image:opacity-50 transition-all duration-500"></div>
                        <div className="relative bg-slate-700/50 rounded-3xl shadow-lg overflow-hidden border border-emerald-500/20">
                          <Image
                            src={project.mainImage || "/placeholder.svg"}
                            alt={`${project.title} main interface`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Screenshots Toggle Button */}
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => toggleScreenshots(projectIndex)}
                          className="inline-flex items-center px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-md bg-transparent font-medium text-sm"
                        >
                          {screenshotsVisible ? (
                            <>
                              <X className="w-4 h-4 mr-2" />
                              Hide Screenshots
                            </>
                          ) : (
                            <>
                              <Images className="w-4 h-4 mr-2" />
                              View Feature Screenshots ({project.screenshots.length})
                            </>
                          )}
                        </button>
                      </div>

                      {/* Screenshot Gallery - Conditionally Rendered */}
                      {screenshotsVisible && (
                        <div className="space-y-8 opacity-100 transform translate-y-0 transition-all duration-300">
                          {/* Gallery Header */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold text-white">Feature Screenshots</h4>
                            <div className="flex items-center space-x-2">
                              <button
                                type="button"
                                onClick={() => prevScreenshot(projectIndex)}
                                className="w-12 h-12 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center transition-colors duration-200 shadow-sm border border-emerald-500/20"
                              >
                                <ChevronLeft className="w-5 h-5 text-emerald-400" />
                              </button>
                              <button
                                type="button"
                                onClick={() => nextScreenshot(projectIndex)}
                                className="w-12 h-12 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center transition-colors duration-200 shadow-sm border border-emerald-500/20"
                              >
                                <ChevronRight className="w-5 h-5 text-emerald-400" />
                              </button>
                            </div>
                          </div>

                          {/* Active Screenshot - Larger Display */}
                          <div className="relative bg-slate-700/50 rounded-3xl shadow-lg overflow-hidden border border-emerald-500/20">
                            <Image
                              src={project.screenshots[currentScreenshot]?.image || "/placeholder.svg"}
                              alt={project.screenshots[currentScreenshot]?.title || "Screenshot"}
                              width={900}
                              height={600}
                              className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                              <h5 className="text-white font-semibold text-xl mb-2">
                                {project.screenshots[currentScreenshot]?.title}
                              </h5>
                              <p className="text-white/90 text-base leading-relaxed">
                                {project.screenshots[currentScreenshot]?.description}
                              </p>
                            </div>
                          </div>

                          {/* Screenshot Thumbnails - Grid Layout */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {project.screenshots.map((screenshot, index) => (
                              <button
                                key={`screenshot-${index}`}
                                type="button"
                                onClick={() => setScreenshot(projectIndex, index)}
                                className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-200 group ${
                                  currentScreenshot === index
                                    ? "border-emerald-400 shadow-lg scale-105 green-glow"
                                    : "border-slate-600 hover:border-emerald-500/50 hover:scale-102"
                                }`}
                              >
                                <Image
                                  src={screenshot.image || "/placeholder.svg"}
                                  alt={screenshot.title}
                                  width={200}
                                  height={120}
                                  className="w-full h-24 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
                                {currentScreenshot === index && (
                                  <div className="absolute inset-0 bg-emerald-400/20 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                  </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                                  <p className="text-white text-xs font-medium truncate">{screenshot.title}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Other Projects Section */}
          <div className="pt-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6">Other Projects</h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-8 green-glow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Link
                  key={`other-project-${index}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="luxury-card hover:border-emerald-500/40 rounded-3xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:green-glow h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={`other-tech-${techIndex}`}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full font-medium border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center mt-4 text-emerald-400 group-hover:text-emerald-300 font-medium text-sm transition-colors duration-300">
                      View Project
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
