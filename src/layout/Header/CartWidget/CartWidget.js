import React, { useContext } from "react";
import cartContext from "context/CartContext/CartContext";
import { NavLink } from "react-router-dom";
import "./CartWidget.scss";

let CartWidget = () => {
    const { cantidad } = useContext(cartContext);
    return (
        <section id="CartWidget">
            {cantidad === 0 ? null : (
                <>
                    <p>Carrito</p>
                    <div className="carritoNavBar">
                        <NavLink to="/Cart">
                            <i className="fas fa-shopping-cart"></i>
                        </NavLink>
                        <span className="contador">{cantidad}</span>
                    </div>
                </>
            )}
        </section>
    );
};

export default CartWidget;
