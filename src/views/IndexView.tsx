
export default function IndexView() {
  return (
    <>
      <div className="bg-slate-500 min-h-screen flex items-center justify-center p-20">
      <div className="w-full max-w-none p-16 rounded-lg flex flex-col md:flex-row items-start md:space-x-16">
        
        {/* Sección de texto con recuadro */}
        <div className="bg-gray-300 p-12 rounded-lg md:w-1/2">
          <h1 className="text-5xl font-bold bg-gray-700 text-white p-8 rounded-lg mb-10">Reunión en Progreso</h1>
          <p className="text-2xl text-gray-800 leading-relaxed">
            Reunión en progreso es un servicio de software diseñado para optimizar la gestión de reuniones empresariales presenciales, disponible tanto en plataformas web como móviles. A través de tecnologías como el reconocimiento de voz y la búsqueda inteligente, permite automatizar la generación de actas, registrar compromisos por voz, y seguir el progreso de estos compromisos de manera eficiente, reduciendo el tiempo y esfuerzo que usualmente conllevan estas tareas.
          </p>
        </div>

        {/* Sección de imagen sin recuadro */}
        <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
          <img
            src="/fondo_index.png"
            alt="Personas reunidas"
            className="max-h-[40rem] w-full object-contain p-y-1"
          />
        </div>

      </div>
    </div>
    </>
  )
}
