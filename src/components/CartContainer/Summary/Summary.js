import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";

const Resume = () => {
    const { totalCompra, cantidad, clearCart } = useContext(cartContext);
    return (
        <div id="summary">
            <span className="botonesCarrito">
                <p>Total de la compra: {totalCompra.toFixed(2)}$</p>
                <p>Cantidad: {cantidad} item/s</p>
                <button className="btn btn-primary" onClick={clearCart}>
                    Vaciar Carrito
                </button>
            </span>
        </div>
    );
};

export default Resume;
