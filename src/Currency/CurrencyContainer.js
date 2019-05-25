import React from 'react';
import Currency from './Currency';

class CurrencyContainer extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <Currency 
                handleOnChange = {this.props.handleOnChange}
                currencyValue = {this.props.currencyValue}
                handleFormSubmit={this.props.handleFormSubmit}
            />
        );
    }
}

export default CurrencyContainer;