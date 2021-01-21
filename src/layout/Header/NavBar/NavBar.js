import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import SubNavBar from "./SubNavBar/SubNavBar";

let NavBar = ({ linksGenerales, linksCategorias, linksAcc }) => {
    return (
        <nav id="NavBar" className="container">
            <ul>
                {linksGenerales.map((link, indice) => {
                    let menu = indice === 0 ? "" : link;
                    return (
                        <li>
                            <span>
                                <NavLink to={"/" + menu} key={menu + indice} exact>
                                    {link}
                                </NavLink>
                                <i className="fas fa-angle-right"></i>
                            </span>
                            {link === "Productos" ? (
                                <SubNavBar linksCategorias={linksCategorias} linksAcc={linksAcc} />
                            ) : (
                                ""
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
