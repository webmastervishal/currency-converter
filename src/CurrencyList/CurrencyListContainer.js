import React from 'react';
import { connect } from 'react-redux';
import CurrencyList from './CurrencyList';

class CurrencyListContainer extends React.Component {
    constructor(props) {
        super(props);

        console.log('currency list',props);
    }

    render() {
        return(
            <CurrencyList 
                currencies = {this.props.currency}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency.currencies
    }
}

export default connect(mapStateToProps)(CurrencyListContainer);