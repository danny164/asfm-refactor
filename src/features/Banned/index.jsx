import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import BannedPage from './pages/BannedPage';

function BannedFeature(props) {
    return (
        <>
            <Switch>
                <Route path="/banned" component={BannedPage} />
            </Switch>
        </>
    );
}

BannedFeature.propTypes = {};

export default BannedFeature;
