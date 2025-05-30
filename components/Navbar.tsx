"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"

const Navbar = ({ handleNavClick }: { handleNavClick: (section: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Navigation items
  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  // Handle navigation click and close mobile menu
  const handleNavItemClick = (id: string) => {
    handleNavClick(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo/Name */}
          <div className="text-lg sm:text-xl font-semibold text-white font-poppins">Phoebe Emefa Agbesi</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavItemClick(item.id)}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="https://docs.google.com/document/d/your-resume-id/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavItemClick(item.id)}
                className="block w-full text-left py-3.5 px-4 rounded-xl text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800 mt-4">
              <Link
                href="https://docs.google.com/document/d/your-resume-id/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 py-6 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
