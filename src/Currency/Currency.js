import React from 'react';
import { Card, CardBody, Form, Label, FormGroup, Button, Input } from 'reactstrap';

const Currency = (props) => {
    console.log(props);
    return(
        <Card>
            <CardBody>
                <Form onSubmit={props.handleFormSubmit}>
                    <FormGroup>
                        <Label>INR</Label>
                        <Input type="text" placeholder="Indian Rupee" onChange={props.handleOnChange} value={props.currencyValue}/>
                    </FormGroup>
                    <Button>Convert</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default Currency;