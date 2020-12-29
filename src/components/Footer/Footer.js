import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ linksGenerales }) => {
    return (
        <footer id="Footer">
            <p>Copyright 2020</p>
            <ul>
                {linksGenerales.map((link, indice) => {
                    return (
                        <li>
                            <Link to={"/" + link} key={indice}>
                                {link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
