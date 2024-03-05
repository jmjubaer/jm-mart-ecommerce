import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/router.jsx'
import { GlobalProvider } from './Provider/GlobalProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={routes}/> 
    </GlobalProvider>
  </React.StrictMode>,
)
