import React from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import GotService from '../../../service/service';
import Field from '../../field/field';


export default class CharacterPage extends React.Component {
    got = new GotService();

    state = {
        selectedChar : null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar : id
        })
    }

    render() {
        return (
            <Row className='m-3'>
                <Col md='6'>
                    <ItemList  
                    onItemSelected={this.onCharSelected}
                    findItemList={this.got.getAllCharacters}/>
                </Col>
                <Col md='6'>
                    <ItemDetails 
                    itemId={this.state.selectedChar}
                    findItem={this.got.getCharacter}
                    goal={'character'}>
                        <Field label={'Gender'} name= {'gender'}/>
                        <Field label={'Born'} name= {'born'}/>
                        <Field label={'Died'} name= {'died'}/>
                        <Field label={'Culture'} name= {'culture'}/>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
} 