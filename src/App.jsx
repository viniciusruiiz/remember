import React, { Component } from 'react';
import Login from './page/login/login';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
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

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showscreen: false,
            authenticated: false
        }

        this.currentPathname = null;
        this.currentSearch = null;

        this.memoryLineRef = React.createRef();
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

        // const { history } = this.props;

        // history.listen((newLocation, action) => {
        //     if (action === "PUSH") {
        //         if (
        //             newLocation.pathname.indexOf('memoryline') > -1 &&
        //             (newLocation.pathname !== this.currentPathname ||
        //                 newLocation.search !== this.currentSearch)
        //         ) {
        //             console.log("watashi ga kitta!")

        //             this.currentPathname = newLocation.pathname;
        //             this.currentSearch = newLocation.search;

        //             history.push({
        //                 pathname: newLocation.pathname,
        //                 search: newLocation.search
        //             });
        //         }
        //     } else {
        //         console.log("here")

        //         if (this.currentPathname != null) {
        //             console.log("222222", BaseService.openedModal)
        //             if (BaseService.openedModal) {
        //                 console.log("modal esta aberto")
        //                 history.go(1);
        //                 this.memoryLineRef.current.handleClose()
        //                 this.memoryLineRef.current.handleCloseParticipants()
        //                 //adicionar mais eventos depois, principalmente de comentario
        //             }
        //             else {
        //                 console.log("modal nao esta aberto")
        //                 history.push('/userhome')
        //                 this.currentPathname = null;
        //                 this.currentSearch = null;
        //             }
        //         }

        //     }
        // });
    }

    handleLogin = () => {
        this.setState({ authenticated: true })
    }

    handleLogout = () => {
        this.setState({ authenticated: false })
    }

    // handleOpenedModal = () => {
    //     let newState = !this.state.openedModal;
    //     this.setState({ openedModal: newState })
    //     console.log(this.state.openedModal)
    // }

    render() {

        return (
            <>
                {this.state.showscreen &&
                    <>
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
                    </>
                }
            </>
        )
    }
}

export default withRouter(App)