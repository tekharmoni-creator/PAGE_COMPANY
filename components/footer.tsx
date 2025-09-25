
import { Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-8">
          {/* Columna izquierda: Logo + descripción */}
          <div className="flex-1 min-w-[220px] max-w-md flex flex-col justify-start">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="TekHarmoni Logo" className="h-10 w-10 mr-3" />
              <span className="text-2xl font-bold text-white">TekHarmoni</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Conectamos tus herramientas, eliminamos tareas repetitivas y hacemos que tus procesos fluyan, para que tú te concentres en lo más importante: hacer crecer tu empresa.
            </p>
          </div>

          {/* Columna derecha: Navegación + redes sociales */}
          <div className="flex-1 flex flex-col items-start md:items-end md:text-right gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">Inicio</a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
                </li>
                <li>
                  <a href="#sobre-nosotros" className="hover:text-blue-400 transition-colors">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://wa.link/804yw8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors text-xl">
                <MessageCircle />
              </a>
              <a href="https://x.com/tekharmoni?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/in/tek-harmoni-b329ab386" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/tekharmoni?igsh=MWg5aXhidXBneTU1Yg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors text-xl">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">© 2025 TekHarmoni - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
