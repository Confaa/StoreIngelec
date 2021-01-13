import React, { useState, useContext } from "react";
import CartItem from "./CartItem/CartItem";
import cartContext from "context/CartContext";
import "./CartList.scss";

const CartList = () => {
    const { carrito, removeItem, clear, totalCompra } = useContext(cartContext);

    const borrarItem = (e) => {
        e.stopPropagation();
        removeItem(e.target.value);
    };

    return (
        <div id="CartList">
            <div>
                {carrito.length === 0 ? (
                    <p>Carrito vacio</p>
                ) : (
                    carrito.map((element) => {
                        return (
                            <CartItem
                                img={element.item.img}
                                id={element.item.id}
                                quantity={element.quantity}
                                price={element.item.price}
                                borrarItem={borrarItem}
                            />
                        );
                    })
                )}
            </div>
            <span>
                <p>Total de la compra: {totalCompra.toFixed(2)}$</p>
                <button className="btn btn-primary" onClick={clear}>
                    Vaciar Carrito
                </button>
                <button className="btn btn-success">Terminar Compra</button>
            </span>
        </div>
    );
};

export default CartList;
