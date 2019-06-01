const actions = {
    UPDATE_CURRENCIES: 'UPDATE_CURRENCIES',
    updateCurrencies: (payload) => ({ type: actions.UPDATE_CURRENCIES,payload}),

    UPDATE_STORE : 'UPDATE_STORE',
    updateStore : (payload) => ({ type: actions.UPDATE_STORE, payload })
}

export default actions;

//action creator

// (payload) => {
//     return {
//         type: 'UPDATE_CURRENCIES',
//         payload : payload
//     }
// }