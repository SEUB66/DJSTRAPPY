import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

/*
 * TODO: Once UI Integration - NPM Option
 * If Once UI is available as an npm package, import it here:
 * import 'once-ui/styles.css';
 * import { OnceUIProvider } from 'once-ui';
 * 
 * Then wrap the App with OnceUIProvider:
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
