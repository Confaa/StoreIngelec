/* import { React, useState } from "react"; */
import { React, useState, useEffect } from "react";
import "./ItemList.scss";
import Item from "./Item/Item";

let ItemList = () => {
    const [lista, setItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://5fe2ac177a9487001768274d.mockapi.io/product")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setItems(data);
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
                        titulo={elemento.title}
                        descripcion={elemento.description}
                        precio={elemento.price}
                    />
                ))
            ) : (
                <p>Cargando productos</p>
            )}
        </div>
    );
};

export default ItemList;
