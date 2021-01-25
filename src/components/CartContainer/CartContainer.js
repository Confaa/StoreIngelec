import React from "react";
import BuyerForm from "./BuyerForm/BuyerForm";
import "./CartContainer.scss";

import CartList from "./CartList/CartList";

const CartContainer = () => {
    return (
        <section id="CartContainer">
            <CartList />
            <BuyerForm />
        </section>
    );
};

export default CartContainer;
