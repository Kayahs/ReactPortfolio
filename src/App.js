import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import NavBar from './NavBar'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
      </div>
    </Router>
  )
}

export default App
