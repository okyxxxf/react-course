import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends React.Component{
    state = {
        selectedChar : null
    }

    onCharSelected = (id) => {
        console.log();
        this.setState({
            selectedChar : id
        })
    }

    render() {
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <RandomChar/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList  onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
