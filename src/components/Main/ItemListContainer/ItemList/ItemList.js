/* import { React, useState } from "react"; */
import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";

let ItemList = ({ lista }) => {
    return (
        <div className="grillaProductos">
            {lista ? (
                lista.map((elemento, index) => (
                    <Item
                        key={index}
                        img={elemento.img}
                        titulo={elemento.title}
                        descripcion={elemento.description}
                        precio={elemento.price}
                        id={elemento.id}
                    />
                ))
            ) : (
                <p>Cargando productos</p>
            )}
        </div>
    );
};

export default ItemList;
