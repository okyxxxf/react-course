import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Spinner, Row, Col} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {
    got = new GotService();

    state = {
        char : {},
        loading : true,
        error : false
    }  

    componentDidMount() {
        this.generateCharacter();
    }

    onChangeChar = (char) => {
        this.setState({
            char : char,
            loading : false
        });
    }
    
    onError = (err) => {
        this.setState({
            loading : false,
            error : true
        })
    }

    generateCharacter() {
        const id = Math.ceil(Math.random() * 1000);
        this.got.getCharacter(id)
            .then(this.onChangeChar)
            .catch(this.onError);

    }

    render() {   
        const { char, loading, error} = this.state;
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