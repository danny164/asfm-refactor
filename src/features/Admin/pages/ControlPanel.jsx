import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ShopList from '../components/ShopList';

function ControlPanel(props) {
    const match = useRouteMatch();
    return (
        <div>
            Danh sách Quản lý
            <Switch>
                <Route exact path={match.url}>
                    <ShopList />
                </Route>
                <Route path={`${match.url}/shipper-list`}>
                    <ShipperList />
                </Route>
                <Route path={`${match.url}/total-post`}>
                    <ShipperList />
                </Route>
            </Switch>
        </div>
    );
}

ControlPanel.propTypes = {};

export default ControlPanel;
