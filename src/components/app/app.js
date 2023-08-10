import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage/characterPage';
import BookPage from '../pages/bookPage/bookPage';
import HousePage from '../pages/housePage/housePage';

export default class App extends React.Component{
    render() {
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <RandomChar/>
                    <CharacterPage/>
                    <BookPage/>
                    <HousePage/>
                </Container>
            </>
        );
    }
}
