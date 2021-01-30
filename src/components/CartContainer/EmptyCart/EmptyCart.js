import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.scss";
import personDollyEmpty from "assets/img/personDollyEmpty.svg";

const EmptyCart = () => {
    return (
        <span id="emptyCart">
            <img src={personDollyEmpty} className="animate__animated animate__fadeInLeft " alt="" />

            <p>Ooops! Su carrito esta vacio.</p>
            <Link to="/">Conozca nuestros productos !</Link>
        </span>
    );
};

export default EmptyCart;
