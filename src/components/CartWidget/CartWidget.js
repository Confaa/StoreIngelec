import React from "react";
import "./CartWidget.scss";

let CartWidget = () => {
    return (
        <a href="#">
            <div className="carritoNavBar">
                <p className="d-none d-md-block">Carrito de compras</p>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </a>
    );
};

export default CartWidget;
