import React from "react";
import "./Home.css";
import ItemListContainer from "./../ItemListContainer/ItemListContainer.js";

let Home = () => {
    return (
        <main className="home">
            <ItemListContainer parrafo="Bienvenidos a la store de la empresa Ingelec S.R.L." />
        </main>
    );
};
export default Home;
