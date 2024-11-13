import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IndexView from './views/IndexView';
import AgendarView from './views/AgendarView';
import SeguimientoView from './views/SeguimientoView';
import RegistroCompromisoView from './views/RegistroCompromisoView';
import GenerarCompromisoView from './views/GenerarCompromisoView';
import SpeechToTextView from './views/SpeechToTextView';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/agendar" element={<AgendarView />} />
          <Route path="/seguimiento" element={<SeguimientoView />} />
          <Route path="/GenerarCompromiso" element={<GenerarCompromisoView />} />
          <Route path="/RegistroCompromiso" element={<RegistroCompromisoView />} />
          <Route path="/SpeechToText" element={<SpeechToTextView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
