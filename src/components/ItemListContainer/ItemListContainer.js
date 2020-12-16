import React from "react";
import "./ItemListContainer.scss";

let ItemListContainer = ({ parrafo }) => {
    return (
        <section className="itemsList">
            <p>{parrafo}</p>
        </section>
    );
};

export default ItemListContainer;
