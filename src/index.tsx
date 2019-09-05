import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './component/login/login';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Secret from './component/secret';
import SignUp from './component/signup/signup';
import EmailConfirmation from './component/emailConfirmation/emailConfirmation';
import SignUpConfirmation from './component/signup/signupConfirmation';

const routing = (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/secret" component={Secret} />
        <Route path="/signup" component={SignUp} />
        <Route path="/singupconfirmation" component={SignUpConfirmation} />
        <Route path="/emailconfirmation" component={EmailConfirmation} />
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
