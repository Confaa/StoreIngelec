/* import { React, useState } from "react"; */
import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";
import ChargeAnimation from "widget/ChargeAnimation";

let ItemList = ({ lista }) => {
    return (
        <div className="grillaProductos">
            {lista ? (
                lista.map((elemento) => {
                    return (
                        <Item
                            img={elemento.img}
                            titulo={elemento.title}
                            descripcion={elemento.description}
                            precio={elemento.price}
                            id={elemento.id}
                            key={elemento.id}
                        />
                    );
                })
            ) : (
                <ChargeAnimation type={"spin"} color={"#000000"} />
            )}
        </div>
    );
};

export default ItemList;
