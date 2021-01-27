import React, { useContext, useState, useEffect } from "react";
import BuyerForm from "./BuyerForm/BuyerForm";
import cartContext from "context/CartContext/CartContext";
import "./CartContainer.scss";

import CartList from "./CartList/CartList";
import { Link } from "react-router-dom";
import Resume from "./Summary/Summary";

import { Modal, Button } from "react-bootstrap";

const CartContainer = () => {
    const { carrito, idCompra, clear } = useContext(cartContext);

    const [show, setShow] = useState();

    useEffect(() => {
        setShow(idCompra);
    }, [idCompra]);
    return (
        <section id="CartContainer">
            {carrito.length === 0 ? (
                <span className="carritoVacio">
                    <p>Ooops! Su carrito esta vacio.</p>
                    <Link to="/" className="btn btn-primary">
                        Conozca nuestros productos !
                    </Link>
                </span>
            ) : (
                <>
                    <CartList carrito={carrito} />
                    <Resume />
                    <BuyerForm />
                    <Button
                        variant="primary"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Launch demo modal
                    </Button>
                    <Modal
                        show={show}
                        onHide={() => {
                            setShow(false);
                            clear();
                        }}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{idCompra}</Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setShow(false);
                                    clear();
                                }}
                            >
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setShow(false);
                                    clear();
                                }}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </section>
    );
};

export default CartContainer;
