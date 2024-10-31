import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IndexView from './views/IndexView';
import AgendarView from './views/AgendarView';
import SeguimientoView from './views/SeguimientoView';
import ActasView from './views/ActasView';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/agendar" element={<AgendarView />} />
          <Route path="/seguimiento" element={<SeguimientoView />} />
          <Route path="/actas" element={<ActasView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
