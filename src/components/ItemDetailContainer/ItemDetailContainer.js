import React from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ChargeAnimation from "widget/ChargeAnimation";
import { getFirestore } from "firebase/firebaseSetup.js";

let ItemDetailContainer = () => {
    const [item, setItem] = React.useState(false);
    const { id } = useParams();
    React.useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            let query = db.collection("productos").doc(id).get();
            query
                .then((data) => {
                    let datosProductos = data.data();
                    return datosProductos;
                })
                .then((datos) => {
                    setItem({ id: id, ...datos });
                });
        }, 3000);
    }, [id]);

    return (
        <div id="ItemDetailContainer">
            {item ? (
                <ItemDetail prod={item} />
            ) : (
                <ChargeAnimation type={"spin"} color={"#000000"} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
