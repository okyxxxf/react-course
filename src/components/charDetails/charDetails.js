import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';

export default class CharDetails extends Component {
    got = new GotService();

    state = {
        char : null,
        loading : true,
        error : false,
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) return;

        this.got.getCharacter(charId)
            .then((char) => this.setState({
                char : char,
                loading : false
            }));
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate() {
        this.updateChar();
    }

    render() {
        const {char, loading, error} = this.state;

        if (!char) {
            return (
                <ListGroup>
                    <ListGroupItem>Please enter a character</ListGroupItem>
                </ListGroup>
            )
        }

        const contentComponent = error || loading ? null : <Content char={char}/>;
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
}


const Content = ({char}) => {
    const {name, gender, born, died, culture } = char;
    return (
            <>
                <ListGroupItem
                className='h4 d-flex justify-content-center m-0'>
                    {name}
                </ListGroupItem>
                <ListGroupItem 
                className='d-flex justify-content-between px-5'>
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Born</span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Died</span>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem
                className='d-flex justify-content-between px-5'>
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </ListGroupItem>
            </>
    );
}