
export default function IndexView() {
  return (
    <div className="bg-slate-500 min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="w-full max-w-7xl bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <div className="bg-gray-300 p-6 sm:p-8 lg:p-12 lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gray-700 text-white p-4 sm:p-6 rounded-lg mb-6 text-center">
              Reunión en Progreso
            </h1>
            <p className="text-md sm:text-base lg:text-2xl text-gray-800 leading-relaxed">
              Reunión en Progreso es un software creado para optimizar la gestión de reuniones de proyectos y de asignaturas académicas, facilitando tanto encuentros presenciales como de otras modalidades. A través de herramientas como el reconocimiento de voz, automatiza la creación de actas, permite registrar compromisos mediante comandos de voz y realizar un seguimiento eficaz de los mismos, minimizando el tiempo y esfuerzo que generalmente requieren estas tareas.
            </p>
          </div>

          {/* Image Section */}
          <div className="bg-slate-500 lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
            <div className="bg-slate-500 relative w-full aspect-square max-w-md">
              <img
                className="bg-slate-500"
                src="/fondo_index.png"
                alt="Personas reunidas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}