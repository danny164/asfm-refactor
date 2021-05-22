import React from 'react';
import PropTypes from 'prop-types';
import ControlPanel from './pages/ControlPanel';
import { Route, Switch } from 'react-router';

function AdminFeature(props) {
    return (
        <>
            <Switch>
                <Route path="/admin" component={ControlPanel} />
            </Switch>
        </>
    );
}

AdminFeature.propTypes = {};

export default AdminFeature;
