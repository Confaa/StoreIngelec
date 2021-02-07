/* import { React, useState } from "react"; */
import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";
import { Row } from "react-bootstrap";

let ItemList = ({ lista }) => {
    return (
        <Row id="itemList">
            {lista.map((elemento) => {
                return <Item elemento={elemento} key={elemento.id} />;
            })}
        </Row>
    );
};

export default ItemList;
