import { Link, NavLink } from 'react-router-dom'

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
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="flex items-center justify-center text-lg font-bold mb-2">INF-322</h2>
                  <p className='flex items-center justify-center'>Dia: Viernes</p>
                  <p className='flex items-center justify-center py-5'>Fecha: 06/09/2024</p>
                  <Link to="/ruta" className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-3/4">
                    Registro del compromiso
                  </Link>
                </div>
                {/* Tarjeta 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="flex items-center justify-center text-lg font-bold mb-2">INF-221</h2>
                  <p className='flex items-center justify-center'>Dia: Martes</p>
                  <p className='flex items-center justify-center py-5'>Fecha: 10/09/2024</p>
                  <Link to="/ruta" className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-3/4">
                    Registro del compromiso
                  </Link>
                </div>
                {/* Tarjeta 3 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="flex items-center justify-center text-lg font-bold mb-2">MAT-024</h2>
                  <p className='flex items-center justify-center'>Dia: Jueves</p>
                  <p className='flex items-center justify-center py-5'>Fecha: 12/09/2024</p>
                  <Link to="/ruta" className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-3/4">
                    Registro del compromiso
                  </Link>
                </div>
                {/* Tarjeta 4 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="flex items-center justify-center text-lg font-bold mb-2">INF-293</h2>
                  <p className='flex items-center justify-center'>Dia: Jueves</p>
                  <p className='flex items-center justify-center py-5'>Fecha: 26/09/2024</p>
                  <Link to="/ruta" className="flex items-center justify-center mx-auto bg-gray-700 hover:bg-gray-800 rounded-lg text-white p-2 w-3/4">
                    Registro del compromiso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
