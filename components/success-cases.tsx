import { Star, Quote } from "lucide-react"

export function SuccessCases() {
  const testimonials = [
    {
      name: "María González",
      company: "Distribuidora MG",
      role: "Gerente General",
      content:
        "TekHarmoni transformó completamente nuestros procesos de inventario. Lo que antes nos tomaba 8 horas ahora se hace automáticamente en 30 minutos.",
      rating: 5,
      savings: "75% menos tiempo en gestión de inventario",
    },
    {
      name: "Carlos Rodríguez",
      company: "Servicios CR",
      role: "Director de Operaciones",
      content:
        "La automatización de nuestros reportes financieros nos permitió reducir errores en un 95% y dedicar más tiempo a la estrategia del negocio.",
      rating: 5,
      savings: "95% menos errores en reportes",
    },
    {
      name: "Ana Martínez",
      company: "Consultoría AM",
      role: "CEO",
      content:
        "Implementamos TekHarmoni hace 6 meses y ya hemos recuperado la inversión. Nuestro equipo ahora se enfoca en tareas de mayor valor agregado.",
      rating: 5,
      savings: "ROI positivo en 6 meses",
    },
  ]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Casos de Éxito</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo otras empresas han transformado sus operaciones con TekHarmoni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <div className="mb-3">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-accent">{testimonial.savings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
