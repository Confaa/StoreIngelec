import React from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ChargeAnimation from "../../widget/ChargeAnimation";

let ItemDetailContainer = () => {
    const [item, setItem] = React.useState(false);
    const { id } = useParams();
    React.useEffect(() => {
        setTimeout(() => {
            let comparar = id.substring(0, 3);
            console.log(comparar);
            console.log(id);
            if (comparar === "acc") {
                fetch(`https://5fe2ac177a9487001768274d.mockapi.io/Accionamientos?id=${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setItem(data);
                    });
            } else if (comparar === "mot") {
                fetch(`https://5fe2ac177a9487001768274d.mockapi.io/MotoresElectricos?id=${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setItem(data);
                    });
            } else if (comparar === "cab") {
                fetch(`https://5fe2ac177a9487001768274d.mockapi.io/Cables?id=${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setItem(data);
                    });
            }
        }, 2000);
    }, [id]);

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
