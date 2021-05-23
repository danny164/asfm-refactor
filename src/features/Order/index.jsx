import AsideLeft from 'components/AsideLeft';
import AsideRight from 'components/AsideRight';
import NotFound from 'components/NotFound';
import ChangePw from 'features/Order/pages/ChangePw';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import OrderList from './pages/OrderList';
import PostOrder from './pages/PostOrder';

function OrderFeature(props) {
    const match = useRouteMatch();

    return (
        <>
            <div className="header-fixed sidebar-enabled bg">
                <div className="d-flex flex-row flex-column-fluid page">
                    <AsideLeft />
                    <Switch>
                        {/* <Redirect from="/home" to="/" exact /> */}
                        <Route path="/" exact component={OrderList} />
                        <Route path="/home" component={OrderList} />
                        <Route path="/post-order" component={PostOrder} />
                        <Route path="/change-pw" component={ChangePw} />
                    </Switch>
                    <AsideRight />
                </div>
            </div>
        </>
    );
}

OrderFeature.propTypes = {};

export default OrderFeature;
