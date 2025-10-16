import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import our new consolidated CSS file
import './assets/css/main.css'
import App from './App.jsx'
import ErrorOverlay from './ErrorOverlay'
import ToastProvider from './components/ToastProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <App />
      <ErrorOverlay />
    </ToastProvider>
  </StrictMode>,
)
