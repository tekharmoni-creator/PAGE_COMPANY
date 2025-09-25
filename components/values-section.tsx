import { Lightbulb, Minimize2, Shield, Zap, Heart, Users } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de mejorar y simplificar los procesos empresariales",
    },
    {
      icon: Minimize2,
      title: "Simplicidad",
      description: "Creemos que las mejores soluciones son aquellas que son fáciles de entender y usar",
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia y la confiabilidad",
    },
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Optimizamos cada proceso para maximizar resultados con el mínimo esfuerzo",
    },
    {
      icon: Heart,
      title: "Armonía",
      description: "Equilibramos tecnología y humanidad para crear soluciones que realmente funcionen",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Fomentamos el trabajo en equipo y la sinergia entre nuestros clientes, socios y colaboradores para lograr los mejores resultados.",
    },
  ]

  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada solución que desarrollamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out animate-slide-up"
              >
                <div className={`mb-4 flex items-center justify-center w-14 h-14 rounded-full ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                  index === 2 ? 'bg-gradient-to-r from-indigo-400 to-indigo-600' :
                  index === 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                  'bg-gradient-to-r from-pink-400 to-pink-600'
                }`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
