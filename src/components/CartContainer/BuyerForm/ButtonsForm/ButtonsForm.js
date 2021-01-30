import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";

import "./ButtonsForm.scss";

const ButtonsForm = () => {
    const { form } = useContext(cartContext);
    const { nombre, telefono, email, repEmail, fechaCompra, clearForm } = form;
    return (
        <span id="buttonForm">
            <button type="reset" className="btn btn-primary" onClick={clearForm}>
                Limpiar formulario
            </button>
            <button
                type="submit"
                onClick={fechaCompra}
                className="btn btn-success"
                disabled={
                    nombre === "" || telefono === "" || email === "" || repEmail === ""
                        ? true
                        : email !== repEmail
                        ? true
                        : false
                }
            >
                Finalizar pedido
            </button>
        </span>
    );
};

export default ButtonsForm;
