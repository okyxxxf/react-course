import React from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import GotService from '../../../service/service';
import Field from '../../field/field';


export default class BookPage extends React.Component {
    got = new GotService();

    state = {
        selectedBook : null
    }

    onBookSelected = (id) => {
        this.setState({
            selectedBook : id
        })
    }

    render() {
        return (
            <Row className='m-3'>
                <Col md='6'>
                    <ItemList  
                    onItemSelected={this.onBookSelected}
                    findItemList={this.got.getAllBooks}/>
                </Col>
                <Col md='6'>
                    <ItemDetails 
                    itemId={this.state.selectedBook}
                    findItem={this.got.getBook}
                    goal={'book'}>
                        <Field label={'Author'} name= {'author'}/>
                        <Field label={'Number of pages'} name= {'numberOfPages'}/>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
} 