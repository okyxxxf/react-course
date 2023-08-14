import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';

export default class ItemList extends Component {
    got = new GotService();

    state = {
        itemList : [],
        loading : true,
        error : false,
    }

    updateItemList = () => {
        const {findItemList} = this.props;

        findItemList()
            .then((list) => {
                this.setState({
                    itemList: list,
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
        this.updateItemList();
    }

    renderItems(items) {
        return items.map((item) => {
            if (!item.name || !item.id) return null;
            return (
                <ListGroupItem 
                onClick={() => this.props.onItemSelected(item.id)}
                key={item.id}>
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList, loading, error} = this.state;

        if (!itemList) return <ListGroupItem><ErrorMessage/></ListGroupItem>;
        const items = this.renderItems(itemList);
    
        const contentComponent = error || loading ? null : <Content items={items}/>;
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

const Content = ({items}) => {
    return (
        <>
            {items}
        </>
    )
}