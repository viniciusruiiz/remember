import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './component/login/login';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Secret from './component/secret';
import SignUp from './component/signup/signup';

const routing = (
    <Router>
        <Route path="/" component={Login} />
        {/*adionar novas rotas da mesma maneira. Exemplo: <Route path="/home" component={Home} />*/}
        <Route path="/secret" component={Secret} />
        <Route path="/signup" component={SignUp} />
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
