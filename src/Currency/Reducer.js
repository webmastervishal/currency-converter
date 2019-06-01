import actions from './Action';

const initialState = {
    currencyValue: 0,
    currencies: [{
        symbol: 'Dollar',
        rate: 0.014,
        value: 0
    },{
        symbol: 'Euro',
        rate: 0.013,
        value: 0
    },{
        symbol: 'Pounds',
        rate: 0.011,
        value: 0
    }]
};

const Reducer = (state = initialState,{ type, payload }) => {
    switch(type){
        case actions.UPDATE_STORE:
            console.log('Inside the reducer',payload);
            return payload;
        default:
            return state;
    }
}

export default Reducer;