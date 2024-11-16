import React from 'react'
import Mainpage from './components/mainpage/Mainpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/Register/Register';
import Detailblog from './components/Blogs/Detailblog';
import History from './components/History/History';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path="/blogs/:id" element={<Detailblog />} />
        <Route path='/history' element={<History />} />
        <Route path='/alert' element={<History />} />
        <Route path='/plant-overviews' element={<History />} />
        <Route path='/account-settings' element={<History />} />
        {/* <Route path='/history' element={<History />} /> */}
      </Routes>
    </Router>
  )
}

export default App
