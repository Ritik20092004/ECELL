import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import GridPage from './pages/GridPage.jsx'
import Home from './pages/Home.jsx'



createRoot(document.getElementById('root')).render(

    <App/>

)
