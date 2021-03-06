import React from 'react'
import './App.css'
import { Router } from '@reach/router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Register from './components/oath/Regitser'
import Login from './components/oath/Login'

import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/authActions'
import { connect } from 'react-redux'
import { logoutUser } from './actions/authActions'

class App extends React.Component {
  componentDidMount() {
    // Check for token

    if (localStorage.jwtToken) {
      // Set auth token header auth
      setAuthToken(localStorage.jwtToken)
      // Decode token and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken)
      // Set user and isAuthenticated
      this.props.dispatch(setCurrentUser(decoded))

      // Chech for expired token
      const currentTime = Date.now / 1000
      if (decoded.exp < currentTime) {
        // Logout user
        this.props.dispatch(logoutUser())
        // Todo Clear current profile

        // Redirect to login
        window.location.href = '/login'
      }
    }
  }
  render() {
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
}

export default connect()(App)
