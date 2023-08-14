import React, {useEffect, useState} from 'react';
import {Container, ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import ErrorMessage from '../errorMessage/errorMessage';
import { useParams } from 'react-router-dom';

export default function ItemDetails({findItem, goal, children}) {
    const params = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const updateItem = () => {
        const {itemId} = params;
        if (!itemId) return;

        findItem(itemId)
            .then((item) => {
                setItem(item);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
            })
    }

    useEffect(() => {
        updateItem();
    })
    if (!item) {
        return (
            <ListGroup>
                <ListGroupItem>Please enter a {goal}</ListGroupItem>
            </ListGroup>
        )
    }

    const contentComponent = error || loading ? null : <Content item={item} children={children}/>;
    const spinnerComponent = loading ? 
        <ListGroupItem><Spinner className='m-5 p-5 text-bg-light'>loading..</Spinner></ListGroupItem>
        : null;
    const errorComponent = error ? <ListGroupItem><ErrorMessage/></ListGroupItem> : null;


    return (
        <Container>
            <ListGroup>
                {contentComponent}
                {spinnerComponent}
                {errorComponent}
            </ListGroup>
        </Container>
    )
}


const Content = ({item, children}) => {
    const {name} = item;
    return (
            <>
                <ListGroupItem
                className='h4 d-flex justify-content-center m-0'>
                    {name}
                </ListGroupItem>
                {
                    React.Children.map(children, (child) => {
                        return  React.cloneElement(child, {item});
                    })
                }
            </>
    );
}
