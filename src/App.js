import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
    const [linksGenerales, setLinksGenerales] = useState(["Home", "Productos", "Mi Cuenta"]);
    const [linksProductos, setLinksProductos] = useState([
        "Contactores",
        "Termomagneticas",
        "Relevos Termicos",
        "Guardamotores",
        "Cables"
    ]);
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Header linksGenerales={linksGenerales} linksProductos={linksProductos} />
                <Main />
                <Footer linksGenerales={linksGenerales} />
            </BrowserRouter>
        </div>
    );
}
export default App;
