import React, { Component } from 'react';
import Login from './page/login/login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignUp from './page/signup/signup';
import SignUpConfirmation from './page/signup/signupConfirmation';
import Error from './page/error/error';
import UserHome from './page/userHome/userHome';
import MemoryLine from './page/memoryLine/memoryLine';
import PrivateRoute from './service/access/PrivateRoute';
import PublicRoute from './service/access/PublicRoute';
import BaseService from './service/baseService';
import NavBar from './components/navbar/navbar';
import Profile from './page/profile/profile';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showscreen: false,
            authenticated: false,
        }
    }

    componentWillMount() {
        if (BaseService.isAuthenticated()) {
            BaseService.setRefreshToken(true);
            BaseService.refreshToken().then(res => {
                this.setState({ "showscreen": true, authenticated: true })
            }).catch(err => {
                BaseService.setRefreshTokenOnLocalStorage("");
                BaseService.setTokenOnLocalStorage("");
                this.setState({ "showscreen": true, authenticated: false })
            });
        } else {
            BaseService.setRefreshToken(false);
            this.setState({ "showscreen": true, authenticated: false });
        }
    }

    handleLogin = () => {
        this.setState({ authenticated: true })
    }

    handleLogout = () => {
        this.setState({ authenticated: false })
    }

    render() {

        return (
            <>
                {this.state.showscreen &&
                    <Router>
                        {this.state.authenticated && <NavBar handler={this.handleLogout} />}
                        <Switch>
                            <PublicRoute restricted={true} exact path="/" component={(props) => <Login {...props} handler={this.handleLogin} />} />
                            <PublicRoute restricted={true} exact path="/signup" component={SignUp} />
                            <PrivateRoute path="/userhome" exact component={UserHome} />
                            <PrivateRoute path="/memoryline" exact component={MemoryLine} />
                            <PrivateRoute path="/profile" exact component={Profile} />
                            <PublicRoute restricted={true} exact path="/singupconfirmation" component={SignUpConfirmation} />
                            <PublicRoute restricted={false} component={Error} />
                        </Switch>
                    </Router>
                }
            </>
        )
    }
}