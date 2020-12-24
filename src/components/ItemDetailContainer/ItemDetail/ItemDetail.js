import React from "react";
import "./ItemDetail.scss";

let ItemDetail = ({ prod }) => {
    return (
        <div className="itemDetallado">
            <img src={prod.img}></img>
            <p>Titulo: {prod.title}</p>
            <p>Marca: {prod.brand}</p>
            <p>Potencia: {prod.powerage}A</p>
            <p>Descripcion: {prod.description}</p>
            <p>Stock: {prod.stock}</p>
            <p>Precio: {prod.price}$</p>
            <p>Codigo de producto: {prod.id}</p>
        </div>
    );
};

export default ItemDetail;
