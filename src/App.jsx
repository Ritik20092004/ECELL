import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import GridPage from './pages/GridPage.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
       
        <BrowserRouter>
         <Header />
         <Routes>
         <Route path='/' element={<GridPage/>} />
         <Route path='/Home' element={<Home/>} />
         </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  )
}

export default App
