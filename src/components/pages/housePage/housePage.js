import React from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import GotService from '../../../service/service';
import Field from '../../field/field';


export default class BookPage extends React.Component {
    got = new GotService();

    state = {
        selectedHouse : null
    }

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse : id
        })
    }

    render() {
        return (
            <Row className='m-3'>
                <Col md='6'>
                    <ItemList  
                    onItemSelected={this.onHouseSelected}
                    findItemList={this.got.getAllHouses}/>
                </Col>
                <Col md='6'>
                    <ItemDetails 
                    itemId={this.state.selectedHouse}
                    findItem={this.got.getHouse}
                    goal={'book'}>
                        <Field label={'Region'} name= {'region'}/>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
} 