import React from "react";
import "./Header.scss";
import NavBar from "./NavBar/NavBar";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";
import { Container } from "react-bootstrap";

let Header = ({ linksGenerales, linksCategorias, linksAcc }) => {
    return (
        <header>
            <Container className="superior">
                <Logo />
                <CartWidget />
            </Container>
            <NavBar
                linksGenerales={linksGenerales}
                linksCategorias={linksCategorias}
                linksAcc={linksAcc}
            />
        </header>
    );
};

export default Header;
