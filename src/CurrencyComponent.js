import React from 'react';
import CurrencyContainer from './Currency/CurrencyContainer';
import CurrencyListContainer from './CurrencyList/CurrencyListContainer';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class CurrencyComponent extends React.Component {
    constructor() {
        super();

        this.state = {
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
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const inrvalue = this.state.currencyValue;

        let newState = JSON.parse(JSON.stringify(this.state));
        newState.currencies.forEach(currency => {
            currency.value = inrvalue * currency.rate;
        });
        
        this.setState(newState);

    }

    handleOnChange = (e) => {
        let newState = JSON.parse(JSON.stringify(this.state));
        newState.currencyValue = e.target.value;

        this.setState(newState);
    }

    render() {
        console.log('state',this.state);
        return(
            <Container>
                <Row>
                    <Col> 
                        <h1>Currency Converter App</h1>
                        <Jumbotron>
                            <CurrencyContainer 
                                handleOnChange = {this.handleOnChange}
                                currencyValue = {this.state.currencyValue}
                                handleFormSubmit={this.handleFormSubmit}
                            />

                            <CurrencyListContainer 
                                currencies = {this.state.currencies}
                            />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CurrencyComponent;