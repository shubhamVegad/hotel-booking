import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './index.css'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>
      { !isOwnerPath && <Navbar></Navbar>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App