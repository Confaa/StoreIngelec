import React, { useState, useContext } from "react";
import "./ItemDetail.scss";
import ItemCount from "components/ItemDetailContainer/ItemDetail/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import cartContext from "context/CartContext/CartContext";
import { Image } from "react-bootstrap";

let ItemDetail = ({ prod }) => {
    const { addItem } = useContext(cartContext);
    const [cant, setCant] = useState(false);

    const onAdd = (e) => {
        e.stopPropagation();
        setCant(Number(e.target.value));
        addItem(prod, Number(e.target.value));
    };
    return (
        <div id="itemDetail">
            <Image src={prod.img} fluid alt=""></Image>
            <span>
                <h4>{prod.title}</h4>
                <p>Marca: {prod.brand}</p>
                {prod.category === "accionamientos" ? (
                    <p>Corriente Nominal: {prod.ratedCurrent} A</p>
                ) : prod.category === "motores-electricos" ? (
                    <>
                        <p>Potencia: {prod.powerage} HP</p>
                        <p>Polos: {prod.poles}</p>
                    </>
                ) : prod.category === "cables" ? (
                    <p>Seccion: {prod.section} mm.</p>
                ) : null}

                <p>Descripcion: {prod.description}</p>
                <p>Stock: {isNaN(prod.stock) ? 0 : prod.stock} (unidad/es)</p>
                <p>Precio: ${prod.price.toFixed(2)}</p>
                {!cant ? (
                    <ItemCount
                        initialValue={isNaN(prod.stock) || prod.stock === 0 ? 0 : 1}
                        maxValue={prod.stock}
                        onAdd={onAdd}
                    />
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
        </div>
    );
};

export default ItemDetail;
