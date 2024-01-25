import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';;
import './style.scss'
import './Components/CheckIn/checkIn.scss'
import './Components/GetStart/getStart.scss'
import Home from './Components/Home/Home'
import GetStart from './Components/GetStart/GetStart';
import CheckIn from './Components/CheckIn/CheckIn';
import Submit from './Components/Submit/Submit';

import Booking from './Components/Booking/Booking';
import './Components/Booking/_booking.scss'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-start" element={<GetStart />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  )
}

export default App
