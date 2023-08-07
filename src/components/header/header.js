import React from 'react';
import {Container, Row, Col, Nav, NavItem, NavLink} from 'reactstrap';

const Header = () => {
    return (
        <Container className='h5 text-light'>
            <Row xl="2">
                <Col className='d-flex'>
                    <Nav>
                        <NavItem>
                            <NavLink 
                            className='text-light'
                            href="#">
                            Game of Thrones DB
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Nav>
                        <NavItem>
                            <NavLink 
                            className='text-light'
                            href="#">
                                Characters
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            className='text-light'
                            href="#">
                                Houses
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            className='text-light'
                            href="#">
                                Books
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;