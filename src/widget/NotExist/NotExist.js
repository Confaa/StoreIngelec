import React from "react";
import { Link } from "react-router-dom";
import "./NotExist.scss";
import "animate.css/animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const NotExist = () => {
    return (
        <div id="notExist">
            <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="animate__animated animate__fadeIn"
            />
            <span className="animate__animated animate__zoomIn animate__fast animate__delay-1s">
                <p>Producto no encontrado</p>
                <Link to="/">Nuestro catalogo de productos</Link>
            </span>
        </div>
    );
};

export default NotExist;
