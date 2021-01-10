import React, { useState } from "react";
import "./App.scss";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import Footer from "../layout/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
    const [linksGenerales, setLinksGenerales] = useState([
        "Home",
        "Productos",
        "Cuenta"
    ]);
    const [linksCategorias, setLinksCategorias] = useState([
        "Accionamientos",
        "Motores Electricos",
        "Cables"
    ]);

    const [linksAcc, setLinksAcc] = useState([
        "Contactores",
        "Termomagneticas",
        "Relevos Termicos",
        "Guardamotores"
    ]);
    const [linksMotores, setLinksMotores] = useState(["Motores Trifasicos"]);
    const [linksCables, setLinksCables] = useState([
        "Unipolares",
        "Tipo Taller",
        "Subterraneos"
    ]);

    /* const [tipos, setTipos] = useState([linksAcc, linksMotores, linksCables]); */
    const productos = [linksAcc, linksMotores, linksCables];
    return (
        <div className="container-fluid grilla">
            <BrowserRouter>
                <Header
                    linksGenerales={linksGenerales}
                    linksCategorias={linksCategorias}
                    linksAcc={productos}
                />
                <Main />
                <Footer linksGenerales={linksGenerales} />
            </BrowserRouter>
        </div>
    );
}
export default App;
