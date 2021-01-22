import React, { useContext } from "react";
import productContext from "context/ProductContext/ProductContext";
import "./Productos.scss";
import ChargeAnimation from "widget/ChargeAnimation";

const Productos = () => {
    const { productos } = useContext(productContext);

    return (
        <div>
            {productos ? (
                productos.map((element) => {
                    return <p>{element.id}</p>;
                })
            ) : (
                <ChargeAnimation type={"spin"} color={"#000000"} />
            )}
        </div>
    );
};

export default Productos;
