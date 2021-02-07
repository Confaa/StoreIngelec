import React, { useState, useEffect } from "react";
import { Provider } from "context/ProductContext/ProductContext";
import { getFirestore } from "firebase/firebaseSetup";

const CustomProviderProducts = ({ children }) => {
    const [productos, setProductos] = useState(false);
    const [categories, setCategories] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const queryProducts = db.collection("items").get();
        queryProducts
            .then((res) => {
                let aux = [];
                res.docs.forEach((doc) => {
                    let item = { id: doc.id, ...doc.data() };
                    aux.push(item);
                });
                return aux;
            })
            .then((data) => {
                setProductos(data);
                console.log("SE EJECUTA");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

        const queryCategories = db.collection("categories").get();
        queryCategories
            .then((res) => {
                return res.docs;
            })
            .then((res) => {
                let aux = [];
                res.forEach((element) => {
                    aux.push({ id: element.id, ...element.data() });
                });
                setCategories(aux);
                console.log(aux);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updateStock = (carrito) => {
        let aux = productos;
        const db = getFirestore();
        let productsCollection = db.collection("items");

        carrito.forEach((element) => {
            aux.forEach((prod, index) => {
                if (element.item.id === prod.id) {
                    console.log(element);
                    console.log(prod);
                    productsCollection.doc(element.item.id).update({
                        stock: aux[index].stock - element.quantity
                    });
                    aux[index].stock -= element.quantity;
                }
            });
        });
        console.log("Actualizado");
    };

    return (
        <Provider
            value={{ productos: productos, categories: categories, updateStock: updateStock }}
        >
            {children}
        </Provider>
    );
};

export default CustomProviderProducts;
