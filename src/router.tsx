import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IndexView from './views/IndexView';
import AgendarView from './views/AgendarView';
import SeguimientoView from './views/SeguimientoView';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/agendar" element={<AgendarView />} />
          <Route path="/seguimiento" element={<SeguimientoView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
