import React, { useContext } from "react";
import cartContext from "context/CartContext/CartContext";
import { NavLink } from "react-router-dom";
import "./CartWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

let CartWidget = () => {
    const { cantidad } = useContext(cartContext);
    return (
        <section id="CartWidget">
            {cantidad === 0 ? null : (
                <>
                    <p>Carrito</p>
                    <div className="carritoNavBar">
                        <NavLink to="/Cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </NavLink>
                        <span className="contador">{cantidad}</span>
                    </div>
                </>
            )}
        </section>
    );
};

export default CartWidget;
