import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import AllRooms from './pages/AllRooms.jsx'
import RoomDetails from './pages/RoomDetails.jsx'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>
      { !isOwnerPath && <Navbar></Navbar>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/rooms' element={<AllRooms />}></Route>
          <Route path='/rooms/:id' element={<RoomDetails />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App