import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './Component/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contact/>
  </StrictMode>,
)
