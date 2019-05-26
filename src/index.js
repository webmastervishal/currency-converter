import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyComponent from './CurrencyComponent';
import store from './Store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
                    <CurrencyComponent />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
