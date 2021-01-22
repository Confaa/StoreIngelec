import React, { useContext } from "react";
import CartItem from "./CartItem/CartItem";
import cartContext from "context/CartContext/CartContext";
import "./CartList.scss";
import { Link } from "react-router-dom";

const CartList = () => {
    const { carrito, removeItem, clear, totalCompra, cantidad } = useContext(cartContext);

    const borrarItem = (e) => {
        e.stopPropagation();
        removeItem(e.target.value);
    };

    return (
        <div id="CartList">
            <div>
                {carrito.length === 0 ? (
                    <span className="carritoVacio">
                        <p>Ooops! Su carrito esta vacio.</p>
                        <Link to="/" className="btn btn-primary">
                            Conozca nuestros productos !
                        </Link>
                    </span>
                ) : (
                    <>
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
                                />
                            );
                        })}

                        <span className="botonesCarrito">
                            <p>Total de la compra: {totalCompra.toFixed(2)}$</p>
                            <p>Cantidad: {cantidad} item/s</p>
                            <button className="btn btn-primary" onClick={clear}>
                                Vaciar Carrito
                            </button>
                            <button className="btn btn-success">Terminar Compra</button>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartList;
