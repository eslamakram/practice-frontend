import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Card, Button } from 'react-bootstrap'

export class FruitCard extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3}>

                    {this.props.fruitsData.map(fruit => {
                        return <Col>
                            <Card style={{ width: '18rem' }}>
                            {/* style={{ width: '100px', height: '180px' }} */}
                                <Card.Img variant="top" src={fruit.img} alt={'fruit'} style={{ width: '15rem' }} />
                                <Card.Body>
                                    <Card.Title>{fruit.name}</Card.Title>
                                    <Card.Text>
                                        Price: {fruit.price}
                                    </Card.Text>
                                    <Button variant="primary">Add to Fav</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    })}
                </Row>
            </div>
        )
    }
}

export default FruitCard;
