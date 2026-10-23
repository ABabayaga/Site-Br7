import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import Clarity from '@microsoft/clarity'
import App from './App.jsx'
import './index.css'

Clarity.init('z1t8yq7m8c')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
