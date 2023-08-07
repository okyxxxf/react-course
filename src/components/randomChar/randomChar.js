import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class RandomChar extends Component {

    render() {
        return (
            <ListGroup className='mb-5'>
                <ListGroupItem className='h4 m-0'>
                    Random Character: John
                </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Gender </span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem
                    className='d-flex justify-content-between px-5'>
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </ListGroupItem>
            </ListGroup>
        );
    }
}
