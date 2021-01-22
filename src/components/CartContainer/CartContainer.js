import React from "react";
import "./CartContainer.scss";

import CartList from "./CartList/CartList";

const CartContainer = () => {
    return (
        <section id="CartContainer">
            <CartList />
        </section>
    );
};

export default CartContainer;
