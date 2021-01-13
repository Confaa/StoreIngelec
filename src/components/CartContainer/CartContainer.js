import React, { useContext } from "react";
import cartContext from "context/CartContext";
import "./CartContainer.scss";

import CartList from "./CartList/CartList";

const CartContainer = () => {
    const { carrito, removeItem, clear } = useContext(cartContext);

    const borrarItem = (e) => {
        e.stopPropagation();
        removeItem(e.target.value);
    };

    return (
        <section id="CartContainer">
            <CartList />
        </section>
    );
};

export default CartContainer;
