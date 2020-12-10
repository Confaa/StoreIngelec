import React from "react";
import "./ItemListContainer.css";

let ItemListContainer = ({ parrafo }) => {
    return (
        <section className="itemsList">
            <p>{parrafo}</p>
        </section>
    );
};

export default ItemListContainer;
