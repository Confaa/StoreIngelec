import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";

const Resume = () => {
    const { totalCompra, cantidad, clearCart } = useContext(cartContext);
    return (
        <div id="summary">
            <span className="botonesCarrito">
                <p>Total de la compra: {totalCompra.toFixed(2)}$</p>
                <p>Cantidad: {cantidad} item/s</p>

                <Button variant="primary" onClick={clearCart}>
                    Vaciar Carrito
                </Button>
            </span>
        </div>
    );
};

export default Resume;
