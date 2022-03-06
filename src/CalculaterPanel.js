// rscp
import React, {useEffect, useState} from 'react';
import PropTypes, {bool} from 'prop-types';
import {Button, Card, Form} from "react-bootstrap";

const CalculaterPanel = (props) => {
    const [diameter, setDiameter] = useState(null);
    const handleDiameterChange = (event) => {
        setDiameter(event.target.value)
    }
    const [number, setNumber] = useState(null);
    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    }
    const [price, setPrice] = useState(null);
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const area = diameter*diameter/4*Math.PI*number;
    const pricePerArea = price*number/ area;

    useEffect(()=>{
        props.setResult(pricePerArea);
    },
        [pricePerArea]);
    return (
        <Card className="text-center" bg={props.isBest && 'success'}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Podaj średnicę pierwszej pizzy</Form.Label>
                        <Form.Control type="number" placeholder="Średnica w cm" value={diameter} onChange={handleDiameterChange} />

                        <Form.Label>Podaj ilość</Form.Label>
                        <Form.Control type="number" placeholder="ilość" value={number} onChange={handleNumberChange} />

                        <Form.Label>Cena za szt.</Form.Label>
                        <Form.Control type="number" placeholder="cena w zł" value={price} onChange={handlePriceChange} />
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer className="text-muted">
                <p>Pole całkowite: {area ? area.toFixed(2) : '--'} cm2</p>

                <p>Cena za cm2 {pricePerArea ? (pricePerArea*100).toFixed(2) : '--'} gr</p>

                </Card.Footer>
        </Card>
    );
};

CalculaterPanel.propTypes = {
 title: PropTypes.string,
    setResult: PropTypes.func,
    isBest: PropTypes.bool,
};

export default CalculaterPanel;