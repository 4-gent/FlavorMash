import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import Logo from "./images/FMLogo.png";

const topBarStyle = {
    backgroundColor: "#228E9F", 
    color: 'white', 
};

const fontStyle = {
    fontFamily: 'Roboto', 
    fontSize: '15px', 
    color:'#FFFFFF'
}

function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={topBarStyle}>
                <Container fluid>
                    <Navbar.Brand href="/"><img src={Logo} alt="logo" width="30" height="30" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="navi" style={fontStyle}>HOME</Nav.Link>
                            <Nav.Link href="/preferences" className="navi" style={fontStyle}>PREFERENCES</Nav.Link>
                            <Nav.Link href="/swipes" className="navi" style={fontStyle}>MASH!</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;