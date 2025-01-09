import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { CalendarApp } from './Calendar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarApp />
  </StrictMode>,
)
