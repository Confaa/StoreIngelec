import React, { useState } from "react";
import "./ItemDetail.scss";
import ItemCount from "components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
let ItemDetail = ({ prod }) => {
    const [cant, setCant] = useState(false);

    const onAdd = (e) => {
        e.stopPropagation();
        setCant(e.target.value);
    };
    console.log(cant);

    return (
        <span id="ItemDetail">
            <img src={prod.img} alt=""></img>
            <p>Titulo: {prod.title}</p>
            <p>Marca: {prod.brand}</p>

            {prod.category === "Accionamientos" ? (
                <p>Corriente Nominal: {prod.ratedCurrent} A</p>
            ) : prod.category === "Motores" ? (
                <>
                    <p>Potencia: {prod.powerage} HP</p>
                    <p>Polos: {prod.poles}</p>
                </>
            ) : prod.category === "Cables" ? (
                <p>Seccion: {prod.section} mm.</p>
            ) : null}

            <p>Descripcion: {prod.description}</p>
            <p>Stock: {prod.stock}</p>
            <p>Precio: {prod.price}$</p>
            <p>Codigo de producto: {prod.id}</p>
            {!cant ? (
                <ItemCount initialValue={1} maxValue={prod.stock} onAdd={onAdd} />
            ) : (
                <Link to="/cart" className="terminarCompra">
                    Terminar compra
                </Link>
            )}
        </span>
    );
};

export default ItemDetail;
