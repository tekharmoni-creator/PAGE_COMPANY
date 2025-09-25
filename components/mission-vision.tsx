"use client"
import { Target, Eye } from "lucide-react"
import { motion } from "framer-motion"

export function MissionVision() {
  return (
  <section className="py-16 px-2 sm:px-0 bg-blue-200" id="sobre-nosotros">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestra Misión y Visión
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Transformamos la manera en que las empresas trabajan a través de la automatización inteligente
          </p>
          <div className="bg-blue-200 rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Misión */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-transform transition-shadow duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-blue-500">
                  <Target className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Empoderar a las pequeñas y medianas empresas con soluciones de automatización accesibles y efectivas que
                  les permitan competir en el mercado digital, optimizando sus recursos y maximizando su potencial de
                  crecimiento.
                </p>
              </motion.div>

              {/* Visión */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-transform transition-shadow duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-500">
                  <Eye className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Nuestra Visión</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Ser la plataforma líder en automatización empresarial para pymes en América Latina, creando un
                  ecosistema donde la tecnología y la humanidad trabajen en perfecta armonía para impulsar el éxito
                  empresarial.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
