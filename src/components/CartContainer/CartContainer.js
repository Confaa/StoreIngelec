import React, { useContext, useState, useEffect } from "react";
import BuyerForm from "./BuyerForm/BuyerForm";
import cartContext from "context/CartContext/CartContext";
import "./CartContainer.scss";

import CartList from "./CartList/CartList";
import Resume from "./Summary/Summary";

import { Modal, Button } from "react-bootstrap";
import EmptyCart from "./EmptyCart/EmptyCart";

const CartContainer = () => {
    const { carrito, idCompra, clearCart } = useContext(cartContext);

    const [show, setShow] = useState();

    useEffect(() => {
        if (typeof idCompra === "string") {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [idCompra]);

    const ModalContent = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };
    return (
        <section id="cartContainer">
            {carrito.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <CartList carrito={carrito} />
                    <Resume />
                    <BuyerForm />
                    <Modal
                        show={show}
                        onHide={() => {
                            setShow(false);
                            clearCart();
                        }}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <span style={ModalContent}>
                                <i
                                    className="fas fa-check-circle"
                                    style={{ fontSize: 50, color: "green" }}
                                ></i>
                                <h3>Compra realizada con exito</h3>
                                <p>El id de su compra: {idCompra}</p>
                            </span>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setShow(false);
                                    clearCart();
                                }}
                            >
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </section>
    );
};

export default CartContainer;
