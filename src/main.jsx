import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

/*
 * TODO: Once UI Integration
 * =========================
 * When Once UI npm package is available, import it here:
 * 
 * import 'once-ui/styles.css'
 * // or
 * import { OnceUIProvider } from 'once-ui'
 * 
 * Then wrap App with the provider if needed:
 * <OnceUIProvider>
 *   <App />
 * </OnceUIProvider>
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
