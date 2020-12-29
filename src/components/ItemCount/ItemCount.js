import { React, useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ initialValue, maxValue, onAdd }) => {
    const [contador, setContador] = useState(initialValue);
    const [stock, setStock] = useState(maxValue);

    const aumentarContador = () => {
        if (stock > 0 && contador < 5) {
            setContador(contador + 1);
            setStock(stock - 1);
        } else {
            document.getElementById("demo").innerHTML = "No queda stock";
        }
    };

    const restarContador = () => {
        if (contador > 0 && stock < 6) {
            setContador(contador - 1);
            setStock(stock + 1);
            document.getElementById("demo").innerHTML = "";
        } else if (contador === 5) {
            setContador(contador - 1);
            setStock(stock + 1);
        }
    };

    return (
        <div className="contador">
            <p> Elementos: {contador} </p>
            <button className="elemento" onClick={aumentarContador}>
                {" "}
                Agregar elemento{" "}
            </button>
            <button className="elemento" onClick={restarContador}>
                {" "}
                Quitar elemento
            </button>
            <p id="demo"></p>
        </div>
    );
};

export default ItemCount;
