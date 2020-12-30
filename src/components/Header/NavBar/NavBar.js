import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

let NavBar = ({ linksGenerales, linksProductos }) => {
    return (
        <nav id="NavBar" className="container">
            <ul>
                {linksGenerales.map((link, indice) => {
                    let menu = indice === 0 ? "" : link;
                    return (
                        <li>
                            <span>
                                <NavLink to={"/" + menu} key={indice} exact>
                                    {link}
                                </NavLink>
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
                                <NavLink to={"/category/" + link} key={indice} exact>
                                    {link}
                                </NavLink>
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
