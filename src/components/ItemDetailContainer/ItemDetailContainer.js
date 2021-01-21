import React, { useContext } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ChargeAnimation from "widget/ChargeAnimation";
import productContext from "context/ProductContext/ProductContext";

let ItemDetailContainer = () => {
    const [item, setItem] = React.useState(false);
    const { id } = useParams();
    const { productos } = useContext(productContext);
    React.useEffect(() => {
        if (productos) {
            setTimeout(() => {
                let aux;
                aux = productos.filter((prod) => prod.id === id);
                setItem(aux);
                console.log(aux);
            }, 1500);
        }
    }, [id, productos]);
    return (
        <div id="ItemDetailContainer">
            {item ? (
                <ItemDetail prod={item[0]} />
            ) : (
                <ChargeAnimation type={"spin"} color={"#000000"} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
