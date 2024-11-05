import EventCard from '../components/EventCard'
import { reuniones } from '../data/reuniones';
import { compromisos } from '../data/compromisos';


export default function SeguimientoView() {
  function formatear_fecha(fecha:number){
    const day = new Date(fecha);
    const formattedDate = day.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate
  }
  return (
    <>
      <div className="bg-slate-500 min-h-screen flex justify-center p-10 md:p-15">
        <div className="w-full max-w-none rounded-lg flex flex-col md:flex-row items-start md:space-x-16">
          {/* Sección de texto con recuadro */}
          <div className="w-full bg-gray-300 p-6 rounded-lg">
            <h1 className="flex items-center justify-center text-xl font-bold bg-gray-700 text-white p-2 rounded-lg mb-6">
              Registro de reuniones (últimos 7 días) 
            </h1>
            <div className="flex items-center justify-center w-full bg-gray-400 p-8 rounded-lg">
              
              {/* Sección de tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {reuniones.map((reunion,i) =>(
                  <EventCard
                    key={i}
                    cardId={i}
                    title={reunion.title}
                    date={formatear_fecha(reunion.day ? reunion.day : 0)}
                    buttonText='Registro de compromiso'
                    resumen={compromisos[i].resumen}
                    integrantes={compromisos[i].integrantes}
                  />

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
