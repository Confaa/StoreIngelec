import React from "react";
import { Button, Image } from "react-bootstrap";

import "./CartItem.scss";
const CartItem = ({ img, id, title, category, quantity, price, borrarItem }) => {
    return (
        <div id="cartItem">
            <Image src={img} fluid alt="" />
            <span>
                <p>Categoria: {category}</p>
                <p>Producto: {title}</p>
                <p>Codigo del producto: {id}</p>
            </span>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price * quantity}</p>

            <Button variant="danger" onClick={borrarItem} value={id}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                </svg>
            </Button>
        </div>
    );
};

export default CartItem;
