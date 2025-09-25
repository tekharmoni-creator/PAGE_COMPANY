"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/40 dark:bg-background/40 border-b border-white/20 dark:border-background/30 shadow-md"
      style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-extrabold tracking-tight text-primary drop-shadow-sm select-none">
                TekHarmoni
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#sobre-nosotros", label: "Sobre nosotros" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-foreground font-medium transition-colors duration-200 px-1 py-0.5 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full z-0"
                  />
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-primary text-white shadow-lg hover:bg-blue-700 transition-all duration-200 font-semibold px-6 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{ boxShadow: '0 4px 24px 0 rgba(0, 123, 255, 0.15)' }}
            >
              Solicita tu automatización
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20 dark:border-background/30 bg-white/80 dark:bg-background/80 backdrop-blur-md rounded-b-xl shadow-lg">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#sobre-nosotros", label: "Sobre nosotros" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground font-medium relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full z-0" />
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-primary text-white shadow-lg hover:bg-blue-700 transition-all duration-200 font-semibold px-6 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  style={{ boxShadow: '0 4px 24px 0 rgba(0, 123, 255, 0.15)' }}
                >
                  Solicita tu automatización
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
