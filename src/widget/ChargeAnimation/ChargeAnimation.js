import React from "react";
import { Spinner } from "react-bootstrap";

import "./ChargeAnimation.scss";

const ChargeAnimation = ({ type, color }) => {
    return (
        <span id="chargeAnimation">
            <Spinner animation="border" variant="primary" role="status" />
        </span>
    );
};

export default ChargeAnimation;
