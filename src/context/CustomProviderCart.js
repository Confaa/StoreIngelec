import React, { useState } from "react";
import { Provider } from "context/CartContext.js";
const CustomProviderCart = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalCompra, setTotalCompra] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    let aux = carrito;

    const addItem = (item, quantity) => {
        //AGREGAR ITEM SEGUN CANTIDAD
        let producto = { item, quantity };
        let enCarrito = isInCart(producto.item.id);
        if (enCarrito) {
            carrito.forEach((element, index) => {
                if (element.item.id === producto.item.id) {
                    aux[index].quantity += producto.quantity;
                }
            });
        } else {
            aux.push(producto);
        }
        setCarrito(aux);
        calcularTotal(aux);
    };

    const removeItem = (itemId) => {
        //REMOVER ITEM POR ID
        console.log(itemId);
        aux = aux.filter((aux) => aux.item.id != itemId);
        setCarrito(aux);
        calcularTotal(aux);
    };

    const clear = () => {
        //BORRAR TODOS LOS ITEMS
        setCarrito([]);
        calcularTotal([]);
    };

    const isInCart = (id) => {
        let inCart = false;
        carrito.forEach((element) => {
            if (id === element.item.id) {
                inCart = true;
                console.log("ESTA EN EL CARRITO");
            }
        });
        return inCart;
    };

    const calcularTotal = (carrito) => {
        let importe = 0;
        let cant = 0;

        carrito.forEach((element) => {
            importe += element.quantity * element.item.price;
            cant += element.quantity;
        });
        setTotalCompra(importe);
        setCantidad(cant);
    };
    return (
        <Provider
            value={{
                carrito: carrito,
                totalCompra: totalCompra,
                cantidad: cantidad,
                addItem: addItem,
                removeItem: removeItem,
                clear: clear
            }}
        >
            {children}
        </Provider>
    );
};

export default CustomProviderCart;

/* const ProductoEnCarrito = (item, quantity) => {
    this.item = item;
    this.quantity = quantity;
}; */
