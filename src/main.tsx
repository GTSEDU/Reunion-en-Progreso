import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router'
import ContextWrapper from './context/ContextWrapper'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextWrapper>
      <AppRouter />
    </ContextWrapper>
  </StrictMode>,
)
