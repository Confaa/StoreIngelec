import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";

let Item = ({ elemento }) => {
    const {
        img,
        price,
        id,
        title,
        brand,
        model,
        category,
        ratedCurrent,
        powerage,
        poles,
        section
    } = elemento;
    return (
        <Col xs={6} md={4} xl={3} className="item">
            <span className="content">
                <Image src={img} loading="lazy" fluid />
                <ul>
                    <h3>{title}</h3>
                    <li>Marca: {brand}</li>
                    {model ? <li>Modelo: {model}</li> : null}
                    {category === "accionamientos" ? (
                        <li>Corriente Nominal: {ratedCurrent} A</li>
                    ) : category === "motores-electricos" ? (
                        <>
                            <li>Potencia: {powerage} HP</li>
                            <li>Polos: {poles}</li>
                        </>
                    ) : (
                        <li>Seccion: {section} mm. </li>
                    )}
                </ul>
                <p>Precio: ${price.toFixed(2)}</p>
                <Link to={"/item/" + id}>Ir al producto</Link>
            </span>
        </Col>
    );
};

export default Item;
