import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';

export default class ItemList extends Component {
    got = new GotService();

    state = {
        charList : [],
        loading : true,
        error : false,
    }

    updateCharList = () => {
        this.got.getAllCharacters(3,5)
            .then((list) => {
                this.setState({
                    charList: list,
                    loading : false
                })
            })
            .catch((error) => {
                this.setState({ 
                    error : true
                });
            })
    }

    onError = () => {
        this.setState({
            error : true
        });
    }

    componentDidCatch() {
        this.onError();
    }

    componentDidMount() {
        this.updateCharList();
    }

    renderItems(items) {
        return items.map((item) => {
            if (!item.name || !item.id) return null;
            return (
                <ListGroupItem 
                onClick={() => this.props.onCharSelected(item.id)}
                key={item.id}>
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {charList, loading, error} = this.state;

        if (!charList) return <ListGroupItem><ErrorMessage/></ListGroupItem>;
        const items = this.renderItems(charList);
    
        const contentComponent = error || loading ? null : <Content chars={items}/>;
        const spinnerComponent = loading ? 
            <ListGroupItem><Spinner className='m-5 p-5 text-bg-light'>loading..</Spinner></ListGroupItem>
            : null;
        const errorComponent = error ? <ListGroupItem><ErrorMessage/></ListGroupItem> : null;

        return (
            <ListGroup>
                {contentComponent}
                {spinnerComponent}
                {errorComponent}
            </ListGroup>
        );
    }
}

const Content = ({chars}) => {
    return (
        <>
            {chars}
        </>
    )
}