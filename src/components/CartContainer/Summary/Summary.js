import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";

const Resume = () => {
    const { totalCompra, cantidad, clear } = useContext(cartContext);
    return (
        <div id="Resume">
            <span className="botonesCarrito">
                <p>Total de la compra: {totalCompra.toFixed(2)}$</p>
                <p>Cantidad: {cantidad} item/s</p>
                <button className="btn btn-primary" onClick={clear}>
                    Vaciar Carrito
                </button>
            </span>
        </div>
    );
};

export default Resume;
