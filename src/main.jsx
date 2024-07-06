import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>,
)
