import React, { useContext } from "react";
import productContext from "context/ProductContext/ProductContext";
import "./Productos.scss";
import ChargeAnimation from "widget/ChargeAnimation/ChargeAnimation";

const Productos = () => {
    const { productos } = useContext(productContext);

    return (
        <div>
            {productos ? (
                productos.map((element) => {
                    return <p key={element.id}>{element.id}</p>;
                })
            ) : (
                <ChargeAnimation />
            )}
        </div>
    );
};

export default Productos;
