import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  HeaderContainer,
  HomePage,
  AboutPage,
  PortfolioPage,
  Resume,
  ContactPage
} from 'components'
import { history } from 'lib'

const MainRouter = () => (
  <Router history={history}>
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" exact component={PortfolioPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
)

export default MainRouter
