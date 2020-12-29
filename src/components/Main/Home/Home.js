import React from "react";
import "./Home.scss";
import ItemListContainer from "../ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.js";

let Home = () => {
    return (
        <main className="home">
            <ItemListContainer parrafo="Bienvenidos a la store de la empresa Ingelec S.R.L." />
            <ItemDetailContainer />
        </main>
    );
};
export default Home;
