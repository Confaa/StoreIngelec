import React from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

let ItemDetailContainer = () => {
    const [item, setItem] = React.useState(false);
    const { id } = useParams();
    React.useEffect(() => {
        setTimeout(() => {
            fetch("https://5fe2ac177a9487001768274d.mockapi.io/Accionamientos")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    data.map((element) => {
                        return element.id === id ? setItem(element) : null;
                    });
                });
        }, 2000);
    }, [id]);

    return <>{item ? <ItemDetail prod={item} /> : "Cargando info"}</>;
};

export default ItemDetailContainer;
