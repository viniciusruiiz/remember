import React from 'react';
import BaseService from '../baseService';
import { Route, Redirect } from 'react-router-dom'

//ADICIONAR VALIDACÕES
const MemoryLineRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        BaseService.isAuthenticated() ? <Component {...props} /> : <Redirect to='/' />
    )} />
)

export default MemoryLineRoute;