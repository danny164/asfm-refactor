import React from 'react';
import { Route, Switch } from 'react-router';
import ForgotPw from './pages/ForgotPw';
import Login from './pages/Login';
import Register from './pages/Register';
import bubbles from 'assets/media/ball-wed.svg';
import Logo from 'components/Logo';
import Version from 'components/Version';
import './styles.scss';

function AuthFeature(props) {
    return (
        <>
            <div
                className="bgi-no-repeat"
                // style={{
                //     backgroundColor: 'white',
                //     backgroundPosition: 'center center',
                //     backgroundSize: 'cover',
                //     backgroundImage: `url(${bubbles})`,
                // }}
            >
                <main className="d-flex flex-column flex-root min-vh-100">
                    <section className="login d-flex flex-row-fluid" id="login">
                        <div className="d-flex flex-center flex-row-fluid">
                            <div className="login-form text-center p-7">
                                <Logo />
                                <Switch>
                                    <Route path="/login" component={Login} />
                                    <Route path="/register" component={Register} />
                                    <Route path="/forgot-pw" component={ForgotPw} />
                                </Switch>
                            </div>
                        </div>
                    </section>
                    <Version />
                </main>
            </div>
        </>
    );
}

AuthFeature.propTypes = {};

export default AuthFeature;
