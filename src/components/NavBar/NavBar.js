import React from "react";
import "./NavBar.scss";
import CartWidget from "./../CartWidget/CartWidget.js";
let NavBar = () => {
    return (
        <header>
            <div className="container">
                <section>
                    <a href="#">
                        <h2>Store Ingelec</h2>
                    </a>
                    <CartWidget />
                </section>

                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>

                <nav>
                    <ul className="navBar">
                        <li className="desplegable">
                            Motherboards<i className="fas fa-angle-down"></i>
                            <ul>
                                <li>
                                    <a href="views/mothersAmd.html">P/AMD</a>
                                </li>
                                <li>
                                    <a href="views/mothersIntel.html">P/Intel</a>
                                </li>
                            </ul>
                        </li>
                        <li className="desplegable">
                            Procesadores<i className="fas fa-angle-down"></i>
                            <ul>
                                <li>
                                    <a href="views/cpusAmd.html">AMD</a>
                                </li>
                                <li>
                                    <a href="views/cpusIntel.html">Intel</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="views/rams.html">Memorias Ram</a>
                        </li>
                        <li>
                            <a href="views/gpus.html">Placas de Video</a>
                        </li>
                        <li>
                            <a href="views/storage.html">Almacenamiento</a>
                        </li>
                        <li>
                            <a href="views/monitors.html">Monitores</a>
                        </li>
                        <li className="desplegable">
                            Otros<i className="fas fa-angle-down"></i>
                            <ul>
                                <li>
                                    <a href="views/computerCases.html">Gabinetes</a>
                                </li>
                                <li>
                                    <a href="views/coolers.html">Coolers P/CPU</a>
                                </li>
                                <li>
                                    <a href="views/os.html">Sistemas Operativos</a>
                                </li>
                                <li>
                                    <a href="#">Lectora DVD/Blu-Ray</a>
                                </li>
                                <li>
                                    <a href="#">Perifericos</a>
                                </li>
                                <li>
                                    <a href="views/powerSupplies.html">Fuentes de Energia</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default NavBar;
