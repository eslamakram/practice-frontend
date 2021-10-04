import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from 'react-bootstrap'

export class FavCard extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3}>

                    {this.props.FavData.map(fruit => {
                        return <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={fruit.image} alt={'fruit'} style={{ width: '15rem' }} />
                                <Card.Body>
                                    <Card.Title>{fruit.name}</Card.Title>
                                    <Card.Text>
                                        Price: {fruit.price}
                                    </Card.Text>
                                    <Button variant="warning" onClick={() => { this.props.handelDisplayUpdateModal(fruit) }}>Update Fruit Info</Button>
                                    <Button variant="danger" onClick={() => { this.props.deleteFav(fruit._id) }}>Delete From Fav</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    })}
                </Row>
            </div>
        )
    }
}

export default FavCard
