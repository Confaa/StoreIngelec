import React from "react";
import "./Logo.scss";
import logoIngelecblanco1px from "assets/img/logoIngelecblanco1px.svg";
import { Link } from "react-router-dom";

let Logo = () => {
    return (
        <span id="Logo">
            <Link to="/">
                <img src={logoIngelecblanco1px} alt="" />
            </Link>
        </span>
    );
};
export default Logo;
