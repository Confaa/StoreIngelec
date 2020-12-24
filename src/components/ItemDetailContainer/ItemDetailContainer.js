import React from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "./ItemDetail/ItemDetail";

let ItemDetailContainer = () => {
    const [item, setItem] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            fetch("https://5fe2ac177a9487001768274d.mockapi.io/product")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setItem(data[3]);
                    console.log(data);
                });
        }, 2000);
    }, []);

    return (
        <>
            <p>Hola</p>
            <ItemDetail prod={item} />
        </>
    );
};

export default ItemDetailContainer;
