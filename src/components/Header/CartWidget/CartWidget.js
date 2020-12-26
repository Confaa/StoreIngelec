import React from "react";
import "./CartWidget.scss";

let CartWidget = () => {
    return (
        <section id="CartWidget">
            <p>Carrito</p>
            <div class="carritoNavBar">
                <a href="carrito.html">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
        </section>
    );
};

export default CartWidget;
