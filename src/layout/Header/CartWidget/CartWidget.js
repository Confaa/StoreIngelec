import React from "react";
import { NavLink } from "react-router-dom";
import "./CartWidget.scss";

let CartWidget = () => {
    return (
        <section id="CartWidget">
            <p>Carrito</p>
            <div className="carritoNavBar">
                <NavLink to="/Cart">
                    <i className="fas fa-shopping-cart"></i>
                </NavLink>
            </div>
        </section>
    );
};

export default CartWidget;
