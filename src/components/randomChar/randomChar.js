import React, { useEffect, useState } from 'react';
import {ListGroup, ListGroupItem, Spinner, Row, Col} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';

export default function RandomChar() {
    const got = new GotService();
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        generateCharacter();
    }, []);

    const onChangeChar = (char) => {
        setChar(char);
        setLoading(false);
    }
    
    const onError = (err) => {
        setError(true);
        setLoading(false);
    }

    const generateCharacter = () => {
        const id = Math.ceil(Math.random() * 1000);
        got.getCharacter(id)
            .then(onChangeChar)
            .catch(onError);

    }

    const contentComponent = error || loading ? null : <Content char={char}/>;
    const spinnerComponent = loading ? 
        <ListGroupItem><Spinner className='m-5 p-5 text-bg-light'>loading..</Spinner></ListGroupItem>
        : null;
    const errorComponent = error ? <ListGroupItem><ErrorMessage/></ListGroupItem> : null;


    return (
        <Row>
            <Col lg={{size: 5, offset: 0}}>
                <ListGroup className='mb-5'>
                    {contentComponent}
                    {spinnerComponent}
                    {errorComponent}
                </ListGroup>
            </Col>
        </Row>
        );
}

const Content = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <ListGroupItem className='h4 m-0'>
                Random Character: {name ? name : 'no info'}
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Gender </span>
                    <span>{gender ? gender : 'no info'}</span>
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                <span className="term">Born </span>
                <span>{born ? born : 'no info'}</span>
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                <span className="term">Died </span>
                <span>{died ? died : 'no info'}</span>
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Culture </span>
                    <span>{culture ? culture : 'no info'}</span>
            </ListGroupItem>
        </>
    )
}