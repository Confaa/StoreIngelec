import { React, useState } from "react";
import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemCount.scss";

const ItemCount = ({ initialValue, maxValue, onAdd }) => {
    const [contador, setContador] = useState(initialValue);
    const [stock, setStock] = useState(maxValue);

    const aumentarContador = () => {
        if (stock > 0 && contador < maxValue) {
            setContador(contador + 1);
            setStock(stock - 1);
        } else {
            document.getElementById("demo").innerHTML = "No queda stock";
        }
    };

    const restarContador = () => {
        if (contador > 0 && stock < maxValue) {
            setContador(contador - 1);
            setStock(stock + 1);
            document.getElementById("demo").innerHTML = "";
        } else if (contador === maxValue) {
            setContador(contador - 1);
            setStock(stock + 1);
        }
    };

    return (
        <div className="contador">
            <span>
                <button className="btn btn-primary" onClick={restarContador}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <input type="text" value={contador} />
                <button className="btn btn-primary" onClick={aumentarContador}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </span>
            <button className="btn btn-success" onClick={onAdd} value={contador}>
                Comprar
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <p id="demo"></p>
        </div>
    );
};

export default ItemCount;
