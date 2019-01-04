import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewAd from './NewAd'
import Index from './Index'
import AdsList from './AdsList'
//import SingleAd from './SingleAd'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Forgot from './Forgot'
import Reset from './Reset'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/ads' component={AdsList} />
            <Route path='/create' component={NewAd} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home} />
            <Route path='/forgotpassword' component={Forgot} />
            <Route path='/password/reset/:token' component={Reset} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
// <Route path='/:id' component={SingleAd} />
ReactDOM.render(<App />, document.getElementById('app'))
