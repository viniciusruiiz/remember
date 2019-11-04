import React from 'react';
import BaseService from '../baseService';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        BaseService.isAuthenticated() ? <Component {...props} /> : <Redirect to='/' />
    )} />
)

export default PrivateRoute;