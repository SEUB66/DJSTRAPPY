import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/*
 * ============================================================
 * ONCE UI INTEGRATION PLACEHOLDER
 * ============================================================
 * 
 * When Once UI package becomes available via npm, add the import here:
 * 
 * import '@once-ui/core/styles.css';
 * // or
 * import { OnceUIProvider } from '@once-ui/core';
 * 
 * Then wrap the App component with the provider if needed:
 * <OnceUIProvider>
 *   <App />
 * </OnceUIProvider>
 * 
 * Check https://once-ui.com for the latest installation instructions.
 * ============================================================
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
