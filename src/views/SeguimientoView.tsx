import EventCard from '../components/EventCard'
import { reuniones } from '../data/reuniones';
import { compromisos } from '../data/compromisos';
import { useState } from 'react';

interface Task {
  id: number;
  text: string;
  nombre: string;
  compromiso: string;
  completed: boolean;
}

export default function SeguimientoView() {
  const [searchTerm, setSearchTerm] = useState('');
  
  
  function formatear_fecha(fecha:number){
    const day = new Date(fecha);
    const formattedDate = day.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate
  }
  // Función para filtrar reuniones según el término de búsqueda
  const filteredReuniones = reuniones.filter((reunion, i) => {
    const acta = compromisos[i]?.resumen || '';
    const integrantes = compromisos[i]?.integrantes || [];

    // Verificar si el término de búsqueda coincide con el título, fecha, acta o nombre de los participantes
    const matchesTitle = reunion.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = reunion.day ? formatear_fecha(reunion.day).toLowerCase().includes(searchTerm.toLowerCase()) : false;
    const matchesActa = acta.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIntegrantes = integrantes.some(integrante =>
      integrante.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Retornar verdadero si coincide con cualquiera de los criterios
    return matchesTitle || matchesDate || matchesActa || matchesIntegrantes;
  });

  return (
    <>
      <div className="bg-slate-500 min-h-screen flex justify-center p-10 md:p-15">
        <div className="w-full max-w-none rounded-lg flex flex-col md:flex-row items-start md:space-x-16">
          {/* Sección de texto con recuadro */}
          <div className="w-full bg-gray-300 p-6 rounded-lg">
            <h1 className="flex items-center justify-center text-xl font-bold bg-gray-700 text-white p-2 rounded-lg mb-6">
              Registro de reuniones (últimos 7 días) 
            </h1>
            
            {/* Barra de búsqueda */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Buscar por título, participante, fecha o contenido del acta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 text-lg rounded-lg border-2 border-gray-400"
              />
            </div>

            <div className="flex items-center justify-center w-full bg-gray-400 p-8 rounded-lg">
              
              {/* Sección de tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {filteredReuniones.length > 0 ? (
                filteredReuniones.map((reunion) => {
                const compromiso = compromisos.find((comp) => comp.id === reunion.id);

                const savedTasksString = localStorage.getItem(`tasks-6`);
                const savedTasks = savedTasksString ? JSON.parse(savedTasksString) : null;

                const allCompromisosEmpty = savedTasks ? savedTasks.every((task : Task) => task.compromiso === "") : true;

                if (allCompromisosEmpty && reunion.id === 6) {
                  return null
                }

                return (
                    <EventCard
                    key={reunion.id}
                    cardId={reunion.id}
                    title={reunion.title}
                    date={formatear_fecha(reunion.day ? reunion.day : 0)}
                    buttonText="Registro de compromiso"
                    resumen={compromiso?.resumen || ''}
                    integrantes={compromiso?.integrantes || []}
                    />
                );
              })
            ) : (
              <p className="text-center w-full text-lg">No se encontraron reuniones.</p>
          )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
