import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header () {
    return (
        <>
        <Navbar collapseOnSelect  bg="secondary" expand="lg" className="header" variant="dark" fixed="top">
            <Container>
        <Navbar.Brand href="/">Safe Shopping App</Navbar.Brand>
        
        </Container>
        </Navbar>
        </>
    )
}