import React from "react";
import "./Item.scss";

let Item = ({ titulo, descripcion, precio }) => {
    return (
        <div className="producto">
            <p>Titulo: {titulo}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default Item;
