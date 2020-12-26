import React from "react";
import "./NavBar.scss";

let NavBar = () => {
    return (
        <nav id="NavBar" className="container">
            <ul>
                <li>
                    <span>
                        <p>Contactores</p>
                        <i className="fas fa-angle-right"></i>
                    </span>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <span>
                        <p>Termomagneticas</p>
                        <i className="fas fa-angle-right"></i>
                    </span>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <span>
                        <p>Relevos termicos</p>
                        <i className="fas fa-angle-right"></i>
                    </span>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <span>
                        <p>Guardamotores</p>
                        <i className="fas fa-angle-right"></i>
                    </span>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <span>
                        <p>Cables</p>
                        <i className="fas fa-angle-right"></i>
                    </span>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;
