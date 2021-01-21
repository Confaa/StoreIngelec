import React from "react";
import "./ItemListContainer.scss";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "firebase/firebaseSetup.js";

let ItemListContainer = ({ parrafo }) => {
    const [lista, setLista] = React.useState(false);
    const { id, subid } = useParams();

    React.useEffect(() => {
        let aux = [];
        setLista(false);

        setTimeout(() => {
            const db = getFirestore();
            if (id === undefined && subid === undefined) {
                const query = db.collection("productos").get();

                query
                    .then((res) => {
                        console.log(res);
                        res.docs.forEach((doc) => {
                            let item = { id: doc.id, ...doc.data() };
                            aux.push(item);
                        });
                        console.log(aux);
                        setLista(aux);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else if (typeof id === "string" && subid === undefined) {
                const query = db
                    .collection("productos")
                    .where("category", "==", `${id}`)
                    .get();

                query
                    .then((res) => {
                        console.log(res.docs);
                        res.docs.forEach((doc) => {
                            let item = { id: doc.id, ...doc.data() };
                            aux.push(item);
                        });
                        console.log(aux);
                        setLista(aux);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else if (typeof id === "string" && typeof subid === "string") {
                const query = db
                    .collection("productos")
                    .where("type", "==", `${subid}`)
                    .get();

                query
                    .then((res) => {
                        console.log(res.docs);
                        res.docs.forEach((doc) => {
                            let item = { id: doc.id, ...doc.data() };
                            aux.push(item);
                        });
                        console.log(aux);
                        setLista(aux);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }, 3000);
    }, [id, subid]);

    return (
        <section className="itemsList">
            <p>{parrafo}</p>
            <ItemList lista={lista} />
        </section>
    );
};

export default ItemListContainer;
