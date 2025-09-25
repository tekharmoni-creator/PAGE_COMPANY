import { Button } from "@/components/ui/button"
import { Clock, DollarSign, BarChart3, ArrowRight } from "lucide-react"

export function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              ¿Por qué elegir <span className="text-blue-600">TekHarmoni</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
              Ayudamos a las pymes a ahorrar tiempo y recursos con automatización inteligente, permitiéndoles competir
              con empresas más grandes sin aumentar costos operativos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mx-auto">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">80%</h3>
              <p className="text-lg font-semibold mb-2 text-blue-600">Menos tiempo</p>
              <p className="text-gray-600">en tareas administrativas y repetitivas</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">60%</h3>
              <p className="text-lg font-semibold mb-2 text-emerald-600">Reducción de costos</p>
              <p className="text-gray-600">operativos en el primer año de implementación</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">3x</h3>
              <p className="text-lg font-semibold mb-2 text-indigo-600">Mayor productividad</p>
              <p className="text-gray-600">del equipo al eliminar tareas manuales</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a
                href="https://wa.link/804yw8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
