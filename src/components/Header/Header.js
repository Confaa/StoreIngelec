import React from "react";
import "./Header.scss";
import NavBar from "./NavBar/NavBar";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";

let Header = ({ linksGenerales, linksCategorias, linksAcc }) => {
    return (
        <header>
            <div className="superior container">
                <Logo />
                <CartWidget />
            </div>
            <NavBar
                linksGenerales={linksGenerales}
                linksCategorias={linksCategorias}
                linksAcc={linksAcc}
            />
        </header>
    );
};

export default Header;
