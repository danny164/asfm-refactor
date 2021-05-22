import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ShipperList from '../components/ShipperList';
import ShopList from '../components/ShopList';
import TotalPost from '../components/TotalPost';

function ControlPanel(props) {
    const { url } = useRouteMatch();
    return (
        <div>
            Danh sách Quản lý
            <Switch>
                <Route exact path={url}>
                    <ShopList />
                </Route>
                <Route path={`${url}/shipper-list`}>
                    <ShipperList />
                </Route>
                <Route path={`${url}/total-post`}>
                    <TotalPost />
                </Route>
            </Switch>
        </div>
    );
}

ControlPanel.propTypes = {};

export default ControlPanel;
