import React from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
        </div>
    );
};

export default CartItem;
