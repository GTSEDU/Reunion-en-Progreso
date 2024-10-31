import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container max-w-full px-4 py-4">
            <div className="flex justify-between items-center">
                <div>
                <Link to="/">
                    <img className="w-32" src="/logo.png" alt="logotipo" />
                </Link>
                </div>

                <nav className="flex gap-4">
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 ${isActive ? 'bg-orange-700 text-white uppercase font-bold' : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'}`
                        }
                    >Inicio</NavLink>
                    <NavLink 
                        to="/agendar"
                        className={({ isActive }) =>
                            `px-4 py-2 ${isActive ? 'bg-orange-700 text-white uppercase font-bold' : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'}`
                        }
                    >Agendar y Ver Reuniones</NavLink>
                    <NavLink 
                        to="/seguimiento"
                        className={({ isActive }) =>
                            `px-4 py-2 ${isActive ? 'bg-orange-700 text-white uppercase font-bold' : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'}`
                        }
                    >Seguimiento de Compromisos</NavLink>
                    <NavLink 
                        to="/actas"
                        className={({ isActive }) =>
                            `px-4 py-2 ${isActive ? 'bg-orange-700 text-white uppercase font-bold' : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'}`
                        }
                    >Generación de Actas</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}