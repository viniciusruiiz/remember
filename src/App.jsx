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

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showscreen: false
        }
    }

    async componentWillMount() {
        if (BaseService.isAuthenticated()) {
            await BaseService.refreshToken();
            console.log("token teoricamente refreshed")
            this.setState({ "showscreen": true })
        } else {
            this.setState({ "showscreen": true })
        }
    }

    render() {

        return (
            <>
                {this.state.showscreen &&
                    <>
                        <Router>
                            <Switch>
                                <PublicRoute restricted={true} exact path="/" component={Login} />
                                <PublicRoute restricted={true} exact path="/signup" component={SignUp} />
                                <PrivateRoute path="/userhome" exact component={UserHome} />
                                <PrivateRoute path="/memoryline" exact component={MemoryLine} />
                                <PublicRoute restricted={true} exact path="/singupconfirmation" component={SignUpConfirmation} />
                                {/* <Route path="/emailconfirmation" component={EmailConfirmation} /> */}
                                <PublicRoute restricted={false} component={Error} />
                            </Switch>
                        </Router>
                    </>
                }
            </>
        )
    }
}