import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './page/login/login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Secret from './page/secret';
import SignUp from './page/signup/signup';
import EmailConfirmation from './page/emailConfirmation/emailConfirmation';
import SignUpConfirmation from './page/signup/signupConfirmation';
import Error from './page/error/error';

const routing = (
  <Router>
    <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route path="/signup" component={SignUp} />
          <Route path="/singupconfirmation" component={SignUpConfirmation} />
          <Route path="/emailconfirmation" component={EmailConfirmation} />
          <Route component={Error} />
      </Switch>
  </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
