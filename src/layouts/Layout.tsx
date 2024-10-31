import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  return (
    <>
        <Header />

        <main className="">
            <Outlet />
        </main>

        <footer className="bg-slate-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} - Reunión en Progreso</p>
        </footer>
    </>
  )
}
