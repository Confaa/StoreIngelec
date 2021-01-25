import React, { useContext } from "react";
import BuyerForm from "./BuyerForm/BuyerForm";
import cartContext from "context/CartContext/CartContext";
import "./CartContainer.scss";

import CartList from "./CartList/CartList";
import { Link } from "react-router-dom";
import Resume from "./Summary/Summary";

const CartContainer = () => {
    const { carrito } = useContext(cartContext);
    return (
        <section id="CartContainer">
            {carrito.length === 0 ? (
                <span className="carritoVacio">
                    <p>Ooops! Su carrito esta vacio.</p>
                    <Link to="/" className="btn btn-primary">
                        Conozca nuestros productos !
                    </Link>
                </span>
            ) : (
                <>
                    <CartList carrito={carrito} />
                    <Resume />
                    <BuyerForm />
                </>
            )}
        </section>
    );
};

export default CartContainer;
