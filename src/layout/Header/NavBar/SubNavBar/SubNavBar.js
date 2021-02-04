import React from "react";
import { NavLink } from "react-router-dom";
import "./SubNavBar.scss";

const SubNavBar = ({ categorias }) => {
    return (
        <ul id="subNavBar">
            {categorias.map((link) => {
                return (
                    <li key={link.id}>
                        <NavLink to={"/categories/" + link.key} exact>
                            {link.description}
                        </NavLink>
                        {link.subcategories ? (
                            <ul>
                                {link.subcategories.map((subLink) => {
                                    return (
                                        <li key={subLink.key}>
                                            <NavLink
                                                to={"/categories/" + link.key + "/" + subLink.key}
                                            >
                                                {subLink.description}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : null}
                    </li>
                );
            })}
        </ul>
    );
};

export default SubNavBar;
