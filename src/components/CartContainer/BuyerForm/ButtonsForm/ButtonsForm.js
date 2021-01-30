import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import "./ButtonsForm.scss";

const ButtonsForm = () => {
    const { form } = useContext(cartContext);
    const { nombre, telefono, email, repEmail, fechaCompra, clearForm } = form;
    return (
        <span id="buttonForm">
            <Button variant="primary" type="reset" onClick={clearForm}>
                Limpiar formulario
            </Button>
            <Button
                variant="success"
                type="submit"
                onClick={fechaCompra}
                disabled={
                    nombre === "" || telefono === "" || email === "" || repEmail === ""
                        ? true
                        : email !== repEmail
                        ? true
                        : false
                }
            >
                Finalizar pedido
            </Button>
        </span>
    );
};

export default ButtonsForm;
