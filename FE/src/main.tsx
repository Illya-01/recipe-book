import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error typescript cannot import css properly
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
