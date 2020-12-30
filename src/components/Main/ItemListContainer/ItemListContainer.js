import React from "react";
import "./ItemListContainer.scss";
import ItemList from "./ItemList/ItemList";

let ItemListContainer = ({ parrafo }) => {
    return (
        <section className="itemsList">
            <p>{parrafo}</p>
            <ItemList />
        </section>
    );
};

export default ItemListContainer;
