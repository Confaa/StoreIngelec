import React, { useContext } from "react";
import "./ItemListContainer.scss";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import productContext from "context/ProductContext/ProductContext";

let ItemListContainer = () => {
    const [lista, setLista] = React.useState(false);
    const { id, subid } = useParams();
    const { productos } = useContext(productContext);

    React.useEffect(() => {
        setLista(false);
        if (productos) {
            setTimeout(() => {
                let aux = [];
                if (id === undefined && subid === undefined) {
                    setLista(productos);
                } else if (typeof id === "string" && subid === undefined) {
                    aux = productos.filter((prod) => prod.category === id);
                    setLista(aux);
                } else if (typeof id === "string" && typeof subid === "string") {
                    aux = productos.filter((prod) => prod.type === subid);
                    setLista(aux);
                }
            }, 1500);
        }
    }, [id, subid, productos]);

    return (
        <section id="itemListContainer">
            <ItemList lista={lista} />
        </section>
    );
};

export default ItemListContainer;
