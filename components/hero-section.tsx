"use client"


import { Button } from "@/components/ui/button"
import { ArrowRight, Workflow, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"

// Framer Motion funciona correctamente en Next.js 14 y React 18 usando el import de 'motion' como se muestra.
// No se usa createContext ni features incompatibles con SSR.

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-16 bg-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Columna izquierda: texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm text-blue-700 font-medium shadow-sm backdrop-blur">
              🚀 Automatización empresarial de nueva generación
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white text-balance leading-tight"
            >
              Hacemos{' '}
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="inline-block text-blue-600 dark:text-blue-400 drop-shadow-md"
              >
                fluir
              </motion.span>{' '}
              tu negocio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mb-10 text-lg sm:text-2xl max-w-2xl mx-auto lg:mx-0 text-gray-500 dark:text-gray-300 leading-relaxed"
            >
              Conectamos tus herramientas, eliminamos tareas repetitivas y hacemos que tus procesos fluyan, para que tú te concentres en lo más importante: hacer crecer tu empresa.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.07, boxShadow: "0 0 0 4px #3b82f633, 0 8px 32px 0 #3b82f655" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  ¡Solicita tu automatizacíon!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 0 4px #3b82f622, 0 4px 16px 0 #3b82f622" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <a
                    href="https://wa.link/804yw8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactanos
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Columna derecha: imagen/ilustración */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0"
          >
            <img
              src="/logo.png"
              alt="Logo TekHarmoni automatización"
              className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>

  {/* Beneficios destacados */}
  <section className="mt-16 py-12 px-2 sm:px-0 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in">
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                <Workflow className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Automatización Inteligente</h3>
              <p className="text-gray-600 text-center">
                Conecta y automatiza procesos entre diferentes herramientas sin código
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in">
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-teal-500">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Eficiencia Máxima</h3>
              <p className="text-gray-600 text-center">
                Reduce hasta un 80% el tiempo en tareas repetitivas y administrativas
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in">
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Enfoque Humano</h3>
              <p className="text-gray-600 text-center">
                Libera a tu equipo para que se concentre en tareas estratégicas y creativas
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
