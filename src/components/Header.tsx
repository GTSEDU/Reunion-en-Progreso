import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
  
    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Agendar y Ver Reuniones', path: '/agendar' },
        { name: 'Registro de Reuniones', path: '/seguimiento' },
    ];

    const isActive = (path: string): boolean => 
        location.pathname === path || (path === '/seguimiento' && location.pathname === '/RegistroCompromiso');

    return (
        <header className="bg-slate-800">
            <div className="mx-auto container max-w-full px-2 sm:px-4 py-2 sm:py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="mb-4 sm:mb-0">
                        <Link to="/">
                            <img className="w-10" src="/logo.png" alt="logotipo" />
                        </Link>
                    </div>

                    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                        {navItems.map((item) => (
                            <NavLink 
                                key={item.path}
                                to={item.path}
                                className={({ isActive: linkIsActive }) =>
                                    `flex items-center justify-center px-2 sm:px-4 py-2 text-xs sm:text-sm lg:text-base w-full sm:w-auto
                                    ${linkIsActive || isActive(item.path)
                                        ? 'bg-orange-700 text-white uppercase font-bold'
                                        : 'text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}