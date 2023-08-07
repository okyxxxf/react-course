import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}