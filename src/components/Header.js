import React from 'react'

import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (

        <header>

            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>Proshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 mr-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link>
                                    <i className="fa-solid fa-house mx-2"></i>
                                    Home
                                </Nav.Link>
                            </LinkContainer>
                            <Nav.Link to="/about-us">
                                <i className="fa-solid fa-hands-bound mx-2"></i>
                                About Us
                            </Nav.Link>
                            <NavDropdown title="Authentication" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#action3">
                                    <i className="fa-solid fa-house-lock mx-2"></i>
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Item to="#action4">
                                    Register
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#action5">
                                    Forgot Password
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="#" disabled>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>


    )
}

export default Header