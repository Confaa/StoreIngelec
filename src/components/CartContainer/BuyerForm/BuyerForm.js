import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";
import ButtonsForm from "./ButtonsForm/ButtonsForm";
import "./BuyerForm.scss";

import InputList from "./InputList/InputList";

const BuyerForm = () => {
    const { finalizarCompra } = useContext(cartContext);

    return (
        <form onSubmit={finalizarCompra} id="BuyerForm">
            <p>Datos personales: </p>
            <InputList />
            <ButtonsForm />
        </form>
    );
};

export default BuyerForm;
