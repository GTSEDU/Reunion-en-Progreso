import EventCard from '../components/EventCard'

export default function SeguimientoView() {
  return (
    <>
      <div className="bg-slate-500 min-h-screen flex justify-center p-10 md:p-15">
        <div className="w-full max-w-none rounded-lg flex flex-col md:flex-row items-start md:space-x-16">
          {/* Sección de texto con recuadro */}
          <div className="w-full bg-gray-300 p-6 rounded-lg">
            <h1 className="flex items-center justify-center text-xl font-bold bg-gray-700 text-white p-2 rounded-lg mb-6">
              Compromisos de la reunión (últimos 7 días) 
            </h1>
            <div className="flex items-center justify-center w-full bg-gray-400 p-8 rounded-lg">
              {/* Sección de tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {/* Tarjeta 1 */}
                <EventCard
                  title="INF-322"
                  day="Viernes"
                  date="06/09/2024"
                  linkPath="/ruta"
                  buttonText="Registro del compromiso"
                />
                {/* Tarjeta 2 */}
                <EventCard
                  title="INF-221"
                  day="Martes"
                  date="10/09/2024"
                  linkPath="/ruta"
                  buttonText="Registro del compromiso"
                />
                {/* Tarjeta 3 */}
                <EventCard
                  title="MAT-024"
                  day="Jueves"
                  date="12/09/2024"
                  linkPath="/ruta"
                  buttonText="Registro del compromiso"
                />
                {/* Tarjeta 4 */}
                <EventCard
                  title="INF-293"
                  day="Jueves"
                  date="26/09/2024"
                  linkPath="/ruta"
                  buttonText="Registro del compromiso"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
