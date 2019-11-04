import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BaseService from '../baseService';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            BaseService.isAuthenticated() && restricted ?
                <Redirect to="/userhome" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;