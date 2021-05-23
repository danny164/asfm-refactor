import React from 'react';
import { Route, Switch } from 'react-router';
import ControlPanel from './pages/ControlPanel';

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
