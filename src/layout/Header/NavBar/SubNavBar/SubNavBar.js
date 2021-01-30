import React from "react";
import { NavLink } from "react-router-dom";
import "./SubNavBar.scss";

const SubNavBar = ({ linksCategorias, linksAcc }) => {
    return (
        <ul id="subNavBar">
            {linksCategorias.map((link, indice) => {
                return (
                    <li key={link}>
                        <NavLink to={"/category/" + link.replace(/ /g, "")} exact>
                            {link}
                        </NavLink>
                        <ul>
                            {linksAcc[indice].map((subLink) => {
                                return (
                                    <li key={subLink}>
                                        <NavLink
                                            to={
                                                "/category/" +
                                                link.replace(/ /g, "") +
                                                "/" +
                                                subLink.replace(/ /g, "")
                                            }
                                        >
                                            {subLink}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
};

export default SubNavBar;
