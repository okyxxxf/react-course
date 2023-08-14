import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import ErrorMessage from '../errorMessage/errorMessage';

function ItemList({findItemList, onItemSelected}) {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateItemList();
    });

    const updateItemList = () => {
        findItemList()
            .then((list) => {
                setItemList(list);
                setLoading(false);
            })
            .catch((error) => {
                setError(true)
            })
    }

    const renderItems = (items) => {
        return items.map((item) => {
            if (!item.name || !item.id) return null;
            return (
                <ListGroupItem 
                onClick={() => onItemSelected(item.id)}
                key={item.id}>
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    if (!itemList) return <ListGroupItem><ErrorMessage/></ListGroupItem>;
    const items = renderItems(itemList);
    
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


const Content = ({items}) => {
    return (
        <>
            {items}
        </>
    )
}

export default ItemList;