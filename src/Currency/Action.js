const actions = {
    UPDATE_CURRENCIES: 'UPDATE_CURRENCIES',
    updateCurrencies: (payload) => ({ type: actions.UPDATE_CURRENCIES,payload})
}

export default actions;

//action creator

// (payload) => {
//     return {
//         type: 'UPDATE_CURRENCIES',
//         payload : payload
//     }
// }