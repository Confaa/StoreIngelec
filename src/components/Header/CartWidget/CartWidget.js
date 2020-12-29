import React from "react";
import "./CartWidget.scss";

let CartWidget = () => {
    return (
        <section id="CartWidget">
            <p>Carrito</p>
            <div className="carritoNavBar">
                <a href="carrito.html">
                    <i className="fas fa-shopping-cart"></i>
                </a>
            </div>
        </section>
    );
};

export default CartWidget;
