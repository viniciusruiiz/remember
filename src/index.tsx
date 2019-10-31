import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './page/login/login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Secret from './page/secret';
import SignUp from './page/signup/signup';
// import EmailConfirmation from './page/emailConfirmation/emailConfirmation';
import SignUpConfirmation from './page/signup/signupConfirmation';
import Error from './page/error/error';
import UserHome from './page/userHome/userHome';
import MemoryLine from './page/memoryLine/memoryLine';
import PrivateRoute from './service/access/PrivateRoute';
import PublicRoute from './service/access/PublicRoute';


const routing = (
  <Router>
    <Switch>
          <PublicRoute restricted={true} exact path="/" component={Login} />
          <PrivateRoute path="/secret" component={Secret} />
          <PrivateRoute path="/signup" component={SignUp} />
          <PrivateRoute path="/userhome" component={UserHome} />
          <PrivateRoute path="/memoryline" component={MemoryLine} />
          <PrivateRoute path="/singupconfirmation" component={SignUpConfirmation} />
          {/* <Route path="/emailconfirmation" component={EmailConfirmation} /> */}
          <PublicRoute restricted={false} component={Error} />
      </Switch>
  </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
