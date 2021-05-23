import Slide from '@material-ui/core/Slide';
import store from 'app/store';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/all.min.css';
import './assets/css/plugins.css';
import './assets/css/styles.scss';
import './assets/css/theme.scss';

Moment.startPooledTimer();
Moment.clearPooledTimer();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    maxSnack={3}
                    autoHideDuration={3500}
                    TransitionComponent={Slide}
                    preventDuplicate
                >
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
