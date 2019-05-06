import React from 'react'
import './App.css'
import { Router } from '@reach/router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Register from './components/oath/Regitser'
import Login from './components/oath/Login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/" />
      </Router>
      <div className="container">
        <Router>
          <Register path="/register" />
          <Login path="/login" />
        </Router>
      </div>
      <Footer default />
    </div>
  )
}

export default App
