import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import GotService from '../../service/service';
import ErrorMessage from '../errorMessage/errorMessage';
import { useParams } from 'react-router-dom';

class ItemDetails extends Component {
    got = new GotService();

    state = {
        item : null,
        loading : true,
        error : false,
    }

    updateItem() {
        const {findItem} = this.props;
        const {itemId} = this.props.params;
        if (!itemId) return;

        findItem(itemId)
            .then((item) => this.setState({
                item : item,
                loading : false
            }));
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate() {
        this.updateItem();
    }

    render() {
        const {item, loading, error} = this.state;
        const {goal} = this.props;

        if (!item) {
            return (
                <ListGroup>
                    <ListGroupItem>Please enter a {goal}</ListGroupItem>
                </ListGroup>
            )
        }

        const contentComponent = error || loading ? null : <Content item={item} children={this.props.children}/>;
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

export default (props) => {
    return (
        <ItemDetails 
        {...props}
        params={useParams()}
        />
    )
}