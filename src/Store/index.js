import { createStore, combineReducers } from 'redux';
import currencyReducer from './../Currency/Reducer';

const rootReducer = combineReducers({
    currency: currencyReducer
});

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => console.log(store.getState()));

export default store;