import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {
    constructor() {
        super(); 
        this.generateCharacter(); 
    }

    got = new GotService();

    state = {
        char : {},
        loading : true,
        error : false
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
            <Spinner className='m-5 p-5 text-bg-light'>loading...</Spinner> 
            : null;
        const errorComponent = error ? <ErrorMessage/> : null;


        return (
            <ListGroup className='mb-5'>
                {contentComponent}
                <ListGroupItem>
                {spinnerComponent}
                </ListGroupItem>
                <ListGroupItem>
                {errorComponent}
                </ListGroupItem>
            </ListGroup>
        );
    }
}

const Content = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <ListGroupItem className='h4 m-0'>
                Random Character: {name}
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Gender </span>
                    <span>{gender}</span>
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                <span className="term">Born </span>
                <span>{born}</span>
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                <span className="term">Died </span>
                <span>{died}</span>
            </ListGroupItem>
            <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Culture </span>
                    <span>{culture}</span>
            </ListGroupItem>
        </>
    )
}