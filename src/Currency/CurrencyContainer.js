import React from 'react';
import { connect } from 'react-redux';
import Currency from './Currency';
import actions from './Action';

class CurrencyContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currencyValue: 0
        }
        console.log('props',props);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const inrvalue = this.state.currencyValue;

        let newState = JSON.parse(JSON.stringify(this.props.currency));
        newState.currencies.forEach(currency => {
            currency.value = inrvalue * currency.rate;
        });

        console.log('newstate',newState);
        
        this.props.updateCurrencies(newState);

    }

    handleOnChange = (e) => {
        this.setState({
            currencyValue: e.target.value
        });
    }

    render() {
        return(
            <Currency 
                handleOnChange = {this.handleOnChange}
                currencyValue = {this.state.currencyValue}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency
    };
}

const mapDispatchToProps = {
    updateCurrencies: actions.updateCurrencies
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);