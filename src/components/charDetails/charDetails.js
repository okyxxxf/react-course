import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem} from 'reactstrap';

export default class CharDetails extends Component {

    render() {
        return (
            <Container>
                <ListGroup>
                    <ListGroupItem
                    className='h4 d-flex justify-content-center m-0'>
                        John Snow
                    </ListGroupItem>
                    <ListGroupItem 
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Gender</span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Born</span>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Died</span>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Culture</span>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </Container>
        );
    }
}