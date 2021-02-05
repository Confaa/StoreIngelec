/* import { React, useState } from "react"; */
import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";
import ChargeAnimation from "widget/ChargeAnimation/ChargeAnimation";
import { Row } from "react-bootstrap";

let ItemList = ({ lista }) => {
    return (
        <Row id="itemList">
            {lista ? (
                lista.map((elemento) => {
                    return <Item elemento={elemento} />;
                })
            ) : (
                <ChargeAnimation />
            )}
        </Row>
    );
};

export default ItemList;
