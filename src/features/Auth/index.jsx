import React from 'react';
import { Route, Switch } from 'react-router';
import ForgotPw from './pages/ForgotPw';
import Login from './pages/Login';
import Register from './pages/Register';

function AuthFeature(props) {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot-pw" component={ForgotPw} />
            </Switch>
        </>
    );
}

AuthFeature.propTypes = {};

export default AuthFeature;
