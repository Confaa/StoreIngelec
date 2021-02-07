import React, { useContext, useState } from "react";
import "./ItemListContainer.scss";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import productContext from "context/ProductContext/ProductContext";
import ChargeAnimation from "widget/ChargeAnimation/ChargeAnimation";

let ItemListContainer = () => {
    const [lista, setLista] = React.useState(false);
    const [greeting, setGreeting] = useState(false);
    const { id, subid } = useParams();
    const { productos, categories } = useContext(productContext);

    React.useEffect(() => {
        setLista(false);
        setGreeting(false);
        if (productos && categories) {
            setTimeout(() => {
                let aux = [];
                if (id === undefined && subid === undefined) {
                    setLista(productos);

                    setGreeting("Aqui puedes ver una lista de la totalidad de nuestros productos");
                } else if (typeof id === "string" && subid === undefined) {
                    aux = productos.filter((prod) => prod.category === id);
                    let a = categories.find((category) => category.key === id);
                    console.log(a);
                    setLista(aux);
                    setGreeting(
                        "Aqui puedes ver una lista de productos de la categoria " + a.description
                    );
                } else if (typeof id === "string" && typeof subid === "string") {
                    aux = productos.filter((prod) => prod.type === subid);
                    let a = categories.find((category) => category.key === id);
                    console.log(a);
                    a = a.subcategories.find((subcategory) => subcategory.key === subid);
                    console.log(a);
                    setLista(aux);
                    setGreeting(
                        "Aqui puedes ver una lista de productos de la subcategoria: " +
                            a.description
                    );
                }
            }, 1500);
        }
    }, [id, subid, productos, categories]);

    return (
        <section id="itemListContainer">
            {lista ? (
                <>
                    <h5>{greeting}</h5>
                    <ItemList lista={lista} />
                </>
            ) : (
                <ChargeAnimation />
            )}
        </section>
    );
};

export default ItemListContainer;
