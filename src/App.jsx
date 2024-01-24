import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss'
import './Components/CheckIn/checkIn.scss'
import Home from './Components/Home/Home'
import GetStart from './Components/GetStart/GetStart';
import CheckIn from './Components/CheckIn/CheckIn'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-start" element={<GetStart />} />
        <Route path="/check-in" element={<CheckIn />} />
      </Routes>
    </Router>
  )
}

export default App
