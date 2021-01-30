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
                            img={element.item.img}
                            id={element.item.id}
                            title={element.item.title}
                            category={element.item.category}
                            quantity={element.quantity}
                            price={element.item.price}
                            borrarItem={borrarItem}
                            key={element.item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CartList;
