import ScrollTop from 'components/ScrollToTop';
import AuthProvider from 'context/AuthContext';
import AdminFeature from 'features/Admin';
import AuthFeature from 'features/Auth';
import { Route, Switch } from 'react-router';
import ScrollToTop from 'react-scroll-to-top';
import NotFound from './components/NotFound';
import OrderFeature from './features/Order';

const style = {
    backgroundColor: 'rgba(102, 50, 89, 0.3)',
    animation: 'animation-scrolltop .4s ease-out 1',
    transition: 'color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, -webkit-box-shadow 0.15s ease',
    borderRadius: '0.675rem !important',
    width: '36px',
    height: '36px',
    bottom: '40px',
    right: '20px',
};

function App() {
    return (
        <>
            <ScrollToTop smooth component={<ScrollTop />} color="#fff" style={style} />
            <AuthProvider>
                <Switch>
                    <Route path="/" component={OrderFeature} exact />
                    <Route path="/home" component={OrderFeature} />
                    <Route path="/post-order" component={OrderFeature} />
                    <Route path="/change-pw" component={OrderFeature} />

                    <Route path="/admin" component={AdminFeature} />

                    <Route path="/login" component={AuthFeature} />
                    <Route path="/register" component={AuthFeature} />
                    <Route path="/forgot-pw" component={AuthFeature} />

                    <Route component={NotFound} />
                </Switch>
            </AuthProvider>
        </>
    );
}

export default App;
