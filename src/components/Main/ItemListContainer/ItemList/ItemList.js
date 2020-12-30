/* import { React, useState } from "react"; */
import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";

let ItemList = () => {
    const [lista, setLista] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            fetch("https://5fe2ac177a9487001768274d.mockapi.io/product")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setLista(data);
                    console.log(data);
                });
        }, 2000);
    }, []);

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
