import React from "react";
import ChargeAnimation from "widget/ChargeAnimation/ChargeAnimation";

import "./ChargeBuy.scss";
const ChargeBuy = () => {
    return (
        <div id="chargeBuy">
            <ChargeAnimation />
            <small>Procesando compra...</small>
        </div>
    );
};

export default ChargeBuy;
