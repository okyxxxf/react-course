import React from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import GotService from '../../../service/service';
import {useNavigate} from 'react-router-dom';

class BookPage extends React.Component {
    got = new GotService();

    onBookSelected = (id) => {
        const { navigate } = this.props
        navigate(`/books/${id}`);
    }

    render() {
        return (
            <Row className='m-3'>
                <Col md='12'>
                    <ItemList  
                    onItemSelected={this.onBookSelected}
                    findItemList={this.got.getAllBooks}/>
                </Col>
            </Row>
        )
    }
} 

export default (props) => {
    const navigator = useNavigate();
    return (
        <BookPage
        {...props}
        navigate={navigator}
        />
    )
}