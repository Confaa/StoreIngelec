import React from "react";
import ReactLoading from "react-loading";
import "./ChargeAnimation.scss";

const ChargeAnimation = ({ type, color }) => {
    return (
        <span id="ChargeAnimation">
            <ReactLoading type={type} color={color} height={100} width={70} />
        </span>
    );
};

export default ChargeAnimation;
