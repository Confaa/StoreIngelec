import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

let Item = ({ img, titulo, descripcion, precio, id }) => {
    return (
        <div className="item">
            <img src={img} loading="lazy" alt="" />
            <p>Titulo: {titulo}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Precio: ${precio}</p>
            <Link to={"/item/" + id}>Ir al producto</Link>
        </div>
    );
};

export default Item;
