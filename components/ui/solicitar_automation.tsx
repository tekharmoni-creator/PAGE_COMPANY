import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface FormularioProps {
  open: boolean;
  onClose: () => void;
}

export default function Formulario({ open, onClose }: FormularioProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    whatsapp: false,
    descripcion: "",
    correo:"",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Bloquea/desbloquea el scroll del body
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  // Manejo de cambios en inputs y textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;
    const name = target.name;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: target.value }));
    }
  };

  // Validación simple de celular
  const validarCelular = (cel: string) => {
    const regex = /^\+57\s?\d{3}\s?\d{3}\s?\d{4}$/;
    return regex.test(cel.trim());
  };

  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCelular(formData.celular)) {
      alert("El número de celular debe tener el formato +57 300 000 0000");
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s

    try {
      const res = await fetch("https://tekharmoni.app.n8n.cloud/webhook-test/2fceed71-8a09-40d6-bec7-18db0519b242", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const contentType = res.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await res.json()
        : await res.text();

      if (!res.ok) {
        const msg =
          typeof payload === "object" && payload?.message
            ? payload.message
            : payload;
        throw new Error(msg || `Error ${res.status}`);
      }

      console.log("Respuesta del servidor:", payload);
      alert("Solicitud enviada con éxito ✅");
      onClose();
    } catch (err: any) {
      if (err?.name === "AbortError") {
        alert("La petición tardó demasiado ⏳. Intenta de nuevo.");
      } else {
        console.error(err);
        alert("Hubo un error al enviar ❌");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 flex items-center gap-1"
        >
          ← <span className="sr-only">Cerrar</span>
        </button>

        <h1 className="text-center text-2xl font-extrabold text-blue-800 mb-6">
          Solicita tu Automatización
        </h1>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="apellido"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Apellido
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                placeholder="Ingresa tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

            <div>
              <label
                htmlFor="Correo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Correo electronico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                placeholder="Username@gmail.com"
                value={formData.correo}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          

          <div>
            <label
              htmlFor="celular"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Celular
            </label>
            <input
              id="celular"
              name="celular"
              type="tel"
              required
              placeholder="+57 300 000 0000"
              value={formData.celular}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <p className="text-xs text-gray-500 mt-1">
              Formato sugerido: +57 300 000 0000
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <input
              id="whatsapp"
              name="whatsapp"
              type="checkbox"
              checked={formData.whatsapp}
              onChange={handleChange}
              className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="whatsapp" className="text-sm text-gray-700">
              Autorizo el envío de mensajes por WhatsApp y autorizo compartir mi
              número de teléfono
            </label>
          </div>

          <div>
            <label
              htmlFor="descripcion"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción de lo que desea automatizar
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={5}
              required
              placeholder="Cuéntanos qué procesos deseas automatizar en tu empresa..."
              value={formData.descripcion}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg text-white py-3 font-medium transition ${
              isSubmitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Al enviar aceptas nuestra{" "}
            <a href="#" className="underline">
              política de privacidad
            </a>
            .
          </p>
        </form>
      </div>
    </div>,
    document.body
  );
}
