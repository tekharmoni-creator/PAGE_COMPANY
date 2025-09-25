import { CheckCircle, TrendingUp, Users, Globe, Cpu } from "lucide-react"

export function StrategicObjectives() {
  const objectives = [
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenible",
      description: "Expandir nuestra presencia en el mercado latinoamericano manteniendo la calidad del servicio",
    },
    {
      icon: Users,
      title: "Empoderamiento Empresarial",
      description: "Ayudar a 10,000+ pymes a digitalizar y automatizar sus procesos en los próximos 3 años",
    },
    {
      icon: Cpu,
      title: "Innovación Continua",
      description: "Desarrollar nuevas funcionalidades basadas en IA y machine learning",
    },
    {
      icon: Globe,
      title: "Impacto Regional",
      description: "Convertirnos en el referente de automatización empresarial en América Latina",
    },
  ]

  return (
    <section className="py-20 bg-blue-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Objetivos Estratégicos
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Nuestro roadmap hacia el futuro de la automatización empresarial
            </p>
          </div>

          <div className="space-y-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-full ${
                    index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    index === 1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                    index === 2 ? 'bg-gradient-to-r from-indigo-400 to-indigo-600' :
                    'bg-gradient-to-r from-pink-400 to-pink-600'
                  }`}>
                    <objective.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{objective.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective.description}</p>
                </div>
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
