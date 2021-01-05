import React from "react";
import "./ItemDetail.scss";

let ItemDetail = ({ prod }) => {
    console.log(prod);

    return (
        <div className="itemDetallado">
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

            {/* <p>Potencia: {prod.powerage}</p> */}

            <p>Descripcion: {prod.description}</p>
            <p>Stock: {prod.stock}</p>
            <p>Precio: {prod.price}$</p>
            <p>Codigo de producto: {prod.id}</p>
        </div>
    );
};

export default ItemDetail;
