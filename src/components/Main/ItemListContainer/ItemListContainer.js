import React from "react";
import "./ItemListContainer.scss";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
/* import { param } from "jquery"; */

let ItemListContainer = ({ parrafo, es }) => {
    const [lista, setLista] = React.useState(false);
    const { id, subid } = useParams();

    React.useEffect(() => {
        let aux = [];
        setLista(false); /* HICE ESTO PARA QUE EN CADA CONSULTA CARGA ALLA UNA ANIMACION DE CARGA */
        setTimeout(() => {
            if (id === undefined && subid === undefined) {
                fetch(`https://5fe2ac177a9487001768274d.mockapi.io/Accionamientos`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        data.forEach((element) => {
                            aux.push(element);
                        });
                        setLista(aux);
                        return fetch(
                            `https://5fe2ac177a9487001768274d.mockapi.io/MotoresElectricos`
                        );
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        data.forEach((element) => {
                            aux.push(element);
                        });
                        setLista(aux);
                        return fetch(`https://5fe2ac177a9487001768274d.mockapi.io/Cables`);
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        data.forEach((element) => {
                            aux.push(element);
                        });
                        setLista(aux);
                    });
            } else if (typeof id === "string" && subid === undefined) {
                fetch(`https://5fe2ac177a9487001768274d.mockapi.io/${id}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setLista(data);
                    });
            } else if (typeof id === "string" && typeof subid === "string") {
                fetch(`https://5fe2ac177a9487001768274d.mockapi.io/${id}?type=${subid}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setLista(data);
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
