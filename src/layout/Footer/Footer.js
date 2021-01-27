import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ linksGenerales }) => {
    return (
        <footer id="Footer">
            <p>Copyright 2020</p>
            <ul>
                {linksGenerales.map((link, indice) => {
                    let menu = indice === 0 ? "" : link;
                    return (
                        <li key={link}>
                            <NavLink to={"/" + menu} exact>
                                {link}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
