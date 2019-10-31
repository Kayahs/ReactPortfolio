import React from 'react'
import { Router, Route } from 'react-router-dom'
import { HeaderContainer, HomePage, AboutPage, PortfolioPage, Resume } from 'components'
import { history } from 'lib'

const MainRouter = () => (
  <Router history={history}>
    <div className="App">
      <HeaderContainer />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" exact component={PortfolioPage} />
    </div>
  </Router>
)

export default MainRouter
