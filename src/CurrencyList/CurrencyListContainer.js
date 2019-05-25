import React from 'react';
import CurrencyList from './CurrencyList';

class CurrencyListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <CurrencyList 
                currencies = {this.props.currencies}
            />
        );
    }
}

export default CurrencyListContainer;