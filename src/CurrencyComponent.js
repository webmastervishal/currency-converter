import React from 'react';
import CurrencyContainer from './Currency/CurrencyContainer';
import CurrencyListContainer from './CurrencyList/CurrencyListContainer';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class CurrencyComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col> 
                        <h1>Currency Converter App</h1>
                        <Jumbotron>
                            <CurrencyContainer />

                            <CurrencyListContainer />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CurrencyComponent;