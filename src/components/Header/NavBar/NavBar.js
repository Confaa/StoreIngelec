import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

let NavBar = ({ linksGenerales, linksProductos }) => {
    return (
        <nav id="NavBar" className="container">
            <ul>
                {linksGenerales.map((link, indice) => {
                    return (
                        <li>
                            <span>
                                <Link to={"/" + link} key={indice}>
                                    {link}
                                </Link>
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {linksProductos.map((link, indice) => {
                    return (
                        <li>
                            <span>
                                <Link to={"/" + link} key={indice}>
                                    {link}
                                </Link>
                                <i className="fas fa-angle-right"></i>
                            </span>
                            <ul>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default NavBar;
