import React from "react";
import logoIngelecblanco1px from "assets/img/logoIngelecblanco1px.svg";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import "./Direction.scss";
const Direction = () => {
    return (
        <Col xs={12} md={5} lg={6} id="direction">
            <Link to="/">
                <Image
                    src={logoIngelecblanco1px}
                    height="40"
                    className="animate__animated animate__zoomIn animate__fast"
                    alt=""
                />
            </Link>

            <p>Equipamientos eléctricos industriales.</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <span>
                    <p>Av. Alem 1355 (E3228)</p>
                    <p>Chajarí, Entre Ríos, Argentina</p>
                </span>
            </div>
        </Col>
    );
};

export default Direction;
