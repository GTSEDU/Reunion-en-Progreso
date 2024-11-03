import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IndexView from './views/IndexView';
import AgendarView from './views/AgendarView';
import SeguimientoView from './views/SeguimientoView';
import RegistroCompromisoView from './views/RegistroCompromisoView';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/agendar" element={<AgendarView />} />
          <Route path="/seguimiento" element={<SeguimientoView />} />
          <Route path="/RegistroCompromiso" element={<RegistroCompromisoView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
