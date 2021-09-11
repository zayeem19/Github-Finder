import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import User from './components/user/User';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './components/pages/NotFound'

let App = () => {
  return (
      <GithubState>
        <AlertState>
      <Router>
      <Fragment>
      <div className="App">
        <Nav />
        <div className="container py-2">
        <Alert />
        <Switch>
          <Route  exact path = '/'component = {Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path= '/user/:login' component = {User}/>
          <Route component={NotFound}/>
        </Switch>
        </div>
      </div>
      </Fragment>
      </Router>
      </AlertState>
      </GithubState>
    );
  
  
}

export default App;
