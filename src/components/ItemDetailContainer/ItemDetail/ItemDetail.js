import React, { useState, useContext, useEffect } from "react";
import "./ItemDetail.scss";
import ItemCount from "components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import cartContext from "context/CartContext";

let ItemDetail = ({ prod }) => {
    const { addItem } = useContext(cartContext);
    const [cant, setCant] = useState(false);

    useEffect(() => {
        console.log(cant);
    }, [cant]);

    const onAdd = (e) => {
        e.stopPropagation();
        setCant(Number(e.target.value));
        addItem(prod, Number(e.target.value));
    };

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
                <div className="buttons">
                    <Link to="/" className="terminarCompra">
                        Seguir Comprando
                    </Link>
                    <Link to="/Cart" className="terminarCompra">
                        Terminar compra
                    </Link>
                </div>
            )}
        </span>
    );
};

export default ItemDetail;
