import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ views }) => {
    return (
        <footer>
            <p>Copyright 2020</p>
            <ul>
                {views.map((link) => {
                    return (
                        <li key={link.id}>
                            <NavLink to={"/" + link.key} exact>
                                {link.description}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
