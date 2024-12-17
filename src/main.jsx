import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home />
  </StrictMode>,
)
