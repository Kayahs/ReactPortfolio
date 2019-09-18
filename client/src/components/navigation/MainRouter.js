import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage, AboutPage, PortfolioPage } from 'components'

const MainRouter = () => (
  <Router>
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/portfolio" exact component={PortfolioPage} />
    </div>
  </Router>
)

export default MainRouter
