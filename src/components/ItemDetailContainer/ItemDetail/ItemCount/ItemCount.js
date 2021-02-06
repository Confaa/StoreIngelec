import { React, useState } from "react";
import "./ItemCount.scss";
import { Alert, Button } from "react-bootstrap";

const ItemCount = ({ initialValue, maxValue, onAdd }) => {
    const [contador, setContador] = useState(initialValue);
    const [stock, setStock] = useState(10 /* maxValue */);
    const [show, setShow] = useState(stock === 0 ? true : false);

    const aumentarContador = () => {
        if (stock > 0 && contador < 10 /* maxValue */) {
            setContador(contador + 1);
            setStock(stock - 1);
        } else {
            setShow(true);
        }
    };

    const restarContador = () => {
        if (contador > 0 && stock < 10 /* maxValue */) {
            setContador(contador - 1);
            setStock(stock + 1);
            setShow(false);
        } else if (contador === 10 /* maxValue */) {
            setContador(contador - 1);
            setStock(stock + 1);
        }
    };

    return (
        <div id="itemCount">
            <span>
                <Button variant="primary" onClick={restarContador} disabled={contador <= 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </Button>
                <p>{contador}</p>
                <Button variant="primary" onClick={aumentarContador} disabled={show}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </Button>
            </span>
            <div className="alert">
                {show ? <Alert variant="danger">No queda mas stock !</Alert> : ""}
            </div>
            <Button variant="success" onClick={onAdd} value={contador}>
                Comprar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
                </svg>
            </Button>
        </div>
    );
};

export default ItemCount;
