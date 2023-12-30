import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EventProvider } from './Components/Event/EventContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventProvider>
    <App />
    </EventProvider>
   
  </React.StrictMode>,
)
