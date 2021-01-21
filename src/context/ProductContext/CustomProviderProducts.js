import React, { useState, useEffect } from "react";
import { Provider } from "context/ProductContext/ProductContext";
import { getFirestore } from "firebase/firebaseSetup";

const CustomProviderProducts = ({ children }) => {
    const [productos, setProductos] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const query = db.collection("productos").get();
        query
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
    }, []);
    return <Provider value={{ productos }}>{children}</Provider>;
};

export default CustomProviderProducts;
