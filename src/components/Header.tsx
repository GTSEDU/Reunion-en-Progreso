import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
  
    return (
    <header className="bg-slate-800">
        <div className="mx-auto container max-w-full px-4 py-4">
            <div className="flex justify-between items-center">
                <div>
                <Link to="/">
                    <img className="w-10" src="/logo.png" alt="logotipo" />
                </Link>
                </div>

                <nav className="flex gap-4">
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center justify-center px-4 py-2 ${isActive ? 'bg-orange-700 text-white uppercase font-bold' : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'}`
                        }
                    >Inicio</NavLink>
                    <NavLink 
                        to="/agendar"
                        className={({ isActive }) =>
                            `flex items-center justify-center px-4 py-2 ${isActive ? 'bg-orange-700 text-white uppercase font-bold' : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'}`
                        }
                    >Agendar y Ver Reuniones</NavLink>
                    <NavLink 
                        to="/seguimiento"
                        className={() =>
                            `flex items-center justify-center px-4 py-2 ${
                                location.pathname === '/seguimiento' || location.pathname==='/RegistroCompromiso'
                                    ? 'bg-orange-700 text-white uppercase font-bold'
                                    : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'
                            }`
                        }
                    >Registro de Reuniones</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}