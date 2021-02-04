import React, { useState, useEffect } from "react";
import "./Header.scss";
import NavBar from "./NavBar/NavBar";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";
import { Container } from "react-bootstrap";

let Header = ({ views }) => {
    return (
        <header>
            <Container className="superior">
                <Logo />
                <CartWidget />
            </Container>
            <NavBar
                views={views}
            />
        </header>
    );
};

export default Header;
