import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class UpadteFruit extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelDisplayUpdateModal}>

                    <Modal.Header closeButton>
                        <Modal.Title>Update Fruit</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.handelUpdateModal}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Fruit name</Form.Label>
                                <Form.Control type="text" placeholder="Enter fruit name" name='fruitName' defaultValue={this.props.selectedFruitUpdate.name}/>
                             </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="src image" name='fruitImage' defaultValue={this.props.selectedFruitUpdate.image}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" label="Enter price" name='fruitPrice' defaultValue={this.props.selectedFruitUpdate.price}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>  
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default UpadteFruit
