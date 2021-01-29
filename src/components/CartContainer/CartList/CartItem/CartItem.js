import React from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CartItem.scss";
const CartItem = ({ img, id, title, category, quantity, price, borrarItem }) => {
    return (
        <div id="CartItem">
            <img src={img} className="img-fluid" alt="" />
            <span>
                <p>Categoria: {category}</p>
                <p>Producto: {title}</p>
                <p>Codigo del producto: {id}</p>
            </span>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price * quantity}</p>
            <button className="btn btn-danger" onClick={borrarItem} value={id}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default CartItem;
