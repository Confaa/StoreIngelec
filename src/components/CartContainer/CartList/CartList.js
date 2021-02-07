import React, { useContext } from "react";
import CartItem from "./CartItem/CartItem";
import cartContext from "context/CartContext/CartContext";
import "./CartList.scss";

const CartList = ({ carrito }) => {
    const { removeItem } = useContext(cartContext);

    const borrarItem = (e) => {
        e.stopPropagation();
        removeItem(e.target.value);
    };

    return (
        <div id="cartList">
            <div>
                <h1>Su compra:</h1>
                {carrito.map((element) => {
                    return (
                        <CartItem
                            quantity={element.quantity}
                            borrarItem={borrarItem}
                            item={element.item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CartList;
