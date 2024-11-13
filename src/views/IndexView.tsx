import DescriptionCard from '../components/DescriptionCard'

export default function IndexView() {
  return (
    <div className="min-h-screen bg-slate-500 text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Texto */}
        <section className="mb-12 flex flex-col items-center justify-center text-center lg:w-1/2 lg:pr-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gray-700 text-white p-4 sm:p-6 rounded-lg mb-6 text-center">
            Reunión en Progreso
          </h1>
          <h2 className="text-md sm:text-xl lg:text-2xl font-bold mb-4">Optimiza tus reuniones</h2>
          <p className="text-sm sm:text-md lg:text-xl text-white mb-6 max-w-prose">
            Reunión en Progreso es un software creado para optimizar la gestión de reuniones de proyectos y de asignaturas académicas, facilitando tanto encuentros presenciales como de otras modalidades.
          </p>
        </section>
        {/* Imagen */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="relative w-full aspect-square max-w-md">
            <img
              src="/fondo_index_1.png"
              alt="Personas reunidas"
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <main className="container mx-auto px-4 py-8">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DescriptionCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Reuniones versátiles"
              description="Facilita tanto encuentros presenciales como reuniones en otras modalidades."
          />
          <DescriptionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            }
            title="Reconocimiento de voz"
            description="Asigna compromisos mediante tecnología de reconocimiento de voz."
          />
          <DescriptionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Creación de actas"
            description="Genera actas de reunión automáticamente, ahorrando tiempo y esfuerzo."
          />
          <DescriptionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Seguimiento de compromisos"
            description="Registra y realiza un seguimiento eficaz de los compromisos asignados a cada participante."
          />
        </section>
      </main>
    </div>
  )
}