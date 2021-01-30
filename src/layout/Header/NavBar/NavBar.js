import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import SubNavBar from "./SubNavBar/SubNavBar";

let NavBar = ({ linksGenerales, linksCategorias, linksAcc }) => {
    return (
        <nav id="navBar" className="container">
            <ul>
                {linksGenerales.map((link, indice) => {
                    let menu = indice === 0 ? "" : link;
                    return (
                        <li key={menu}>
                            <span>
                                <NavLink to={"/" + menu} exact>
                                    {link}
                                </NavLink>
                                <FontAwesomeIcon icon={faAngleRight} />
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
