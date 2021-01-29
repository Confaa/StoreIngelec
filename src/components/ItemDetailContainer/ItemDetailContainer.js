import React, { useContext } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ChargeAnimation from "widget/ChargeAnimation";
import productContext from "context/ProductContext/ProductContext";
import NotExist from "../../widget/NotExist/NotExist";

let ItemDetailContainer = () => {
    const [item, setItem] = React.useState(false);
    const { id } = useParams();
    const { productos } = useContext(productContext);
    React.useEffect(() => {
        if (productos) {
            setTimeout(() => {
                let aux;
                aux = productos.filter((prod) => prod.id === id);
                aux.length === 0 ? setItem([]) : setItem(aux[0]);
                console.log(aux);
            }, 1500);
        }
    }, [id, productos]);

    return (
        <div id="ItemDetailContainer">
            {!item ? (
                <ChargeAnimation type={"spin"} color={"#000000"} />
            ) : item.length === 0 ? (
                <NotExist />
            ) : (
                <ItemDetail prod={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
