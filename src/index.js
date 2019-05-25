import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyComponent from './CurrencyComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CurrencyComponent />, document.getElementById('root'));

serviceWorker.unregister();
