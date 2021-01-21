import React from "react";
import { NavLink } from "react-router-dom";
import "./SubNavBar.scss";

const SubNavBar = ({ linksCategorias, linksAcc }) => {
    return (
        <>
            <ul id="SubNavBar">
                {linksCategorias.map((link, indice) => {
                    return (
                        <li>
                            <NavLink
                                to={"/category/" + link.replace(/ /g, "")}
                                key={link + indice}
                                exact
                            >
                                {link}
                            </NavLink>
                            <ul>
                                {linksAcc[indice].map((subLink) => {
                                    return (
                                        <li>
                                            <NavLink
                                                to={
                                                    "/category/" +
                                                    link.replace(/ /g, "") +
                                                    "/" +
                                                    subLink.replace(/ /g, "")
                                                }
                                                key={subLink + indice}
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
        </>
    );
};

export default SubNavBar;
