import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavFooter.scss";

const NavFooter = ({ views }) => {
    return (
        <Col id="navFooter">
            <p>LINKS </p>
            {views.map((link) => {
                return (
                    <p key={link.id}>
                        <NavLink to={"/" + link.key} exact>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                            </svg>
                            {link.description}
                        </NavLink>
                    </p>
                );
            })}
        </Col>
    );
};

export default NavFooter;
