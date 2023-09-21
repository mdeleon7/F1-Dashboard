import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DataFetchingProvider} from './DataFetchingContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataFetchingProvider>
      <App />
    </DataFetchingProvider>
  </React.StrictMode>,
)
