import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage/characterPage';
import BookPage from '../pages/bookPage/bookPage';
import HousePage from '../pages/housePage/housePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemDetails from '../itemDetails';
import Field from '../field/field';
import GotService from '../../service/service';

export default class App extends React.Component{
    got = new GotService();

    render() {
        return (
            <div className='app'>
                <Router> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <RandomChar/>
                        <Routes>
                            <Route path='/characters/' exact Component={CharacterPage}/>
                            <Route path='/books/' exact Component={BookPage}/>
                            <Route path='/Houses/' exact Component={HousePage}/>
                            <Route path='/books/:itemId' exact element={
                                        <ItemDetails 
                                        findItem={this.got.getBook}
                                        goal={'book'}>
                                            <Field label={'Author'} name= {'author'}/>
                                            <Field label={'Number of pages'} name= {'numberOfPages'}/>
                                        </ItemDetails>
                            }/>
                        </Routes>
                    </Container>
                </Router>
            </div>
        );
    }
}
