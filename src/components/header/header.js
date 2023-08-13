import React from 'react';
import {Container, Row, Col, Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className='h5 text-light m-3'>
            <Row xl="2">
                <Col className='d-flex justify-content-start'>
                    <Nav>
                        <NavItem>
                            <Link 
                            className='text-light' 
                            to='/'>
                                Game of Thrones 
                            </Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Nav>
                        <NavItem>
                            <Link 
                            className='text-light m-3' 
                            to='/characters/'>
                                Characters 
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link 
                            className='text-light m-3' 
                            to='/books/'>
                                Books
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link 
                            className='text-light m-3' 
                            to='/houses/'>
                                Houses 
                            </Link>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;