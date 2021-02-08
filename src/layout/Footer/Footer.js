import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact/Contact";
import Direction from "./Direction/Direction";

import "./Footer.scss";
import NavFooter from "./NavFooter/NavFooter";

const Footer = ({ views }) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Direction />
                    <NavFooter views={views} />
                    <Contact />
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
