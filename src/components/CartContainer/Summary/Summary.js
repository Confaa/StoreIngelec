import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "./Summary.scss";

const Resume = () => {
    const { totalCompra, cantidad, clearCart } = useContext(cartContext);
    return (
        <div id="summary">
            <span>
                <p>Total de la compra: {totalCompra.toFixed(2)}$</p>
                <p>Cantidad: {cantidad} item/s</p>
            </span>
            <Button variant="primary" onClick={clearCart}>
                Vaciar Carrito
            </Button>
        </div>
    );
};

export default Resume;
