import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";
import "./BuyerForm.scss";

const BuyerForm = () => {
    const { finalizarCompra, formFunctions } = useContext(cartContext);
    const { setNombre, setTelefono, setEmail, setRepEmail, fechaCompra } = formFunctions;

    return (
        <form onSubmit={finalizarCompra} id="BuyerForm">
            <p>Datos personales: </p>
            <input
                type="text"
                onChange={(e) => {
                    setNombre(e.target.value);
                }}
                placeholder="Nombre y apellido"
            />
            <input
                type="tel"
                onChange={(e) => {
                    setTelefono(e.target.value);
                }}
                placeholder="Telefono"
            />
            <input
                type="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                placeholder="Email"
            />
            <input
                type="email"
                onChange={(e) => {
                    setRepEmail(e.target.value);
                }}
                placeholder="Repetir Email"
            />
            <span>
                <button type="reset" className="btn btn-primary">
                    Limpiar formulario
                </button>
                <button type="submit" onClick={fechaCompra} className="btn btn-success">
                    Finalizar pedido
                </button>
            </span>
        </form>
    );
};

export default BuyerForm;
