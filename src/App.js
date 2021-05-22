import AdminFeature from 'features/Admin';
import AuthFeature from 'features/Auth';
import { Route, Switch } from 'react-router';
import NotFound from './components/NotFound';
import OrderFeature from './features/Order';

function App() {
    return (
        <>
            <Switch>
                <Route path="/" component={OrderFeature} exact />
                <Route path="/home" component={OrderFeature} />
                <Route path="/post-order" component={OrderFeature} />
                <Route path="/change-pw" component={OrderFeature} />

                <Route path="/admin" component={AdminFeature} />

                <Route path="/login" component={AuthFeature} />
                <Route path="/register" component={AuthFeature} />
                <Route path="/forgotpw" component={AuthFeature} />

                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default App;
