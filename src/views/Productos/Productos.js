import React, { useContext } from "react";
import "./Productos.scss";
import { Link } from "react-router-dom";
import productContext from "context/ProductContext/ProductContext";
import ChargeAnimation from "widget/ChargeAnimation/ChargeAnimation";

const Productos = () => {
    const { categories } = useContext(productContext);
    console.log(categories);
    return (
        <>
            <h5>Aqui podrá ver las categorías y subcategorías de productos</h5>
            <div id="productos">
                {categories ? (
                    categories.map((element) => {
                        return (
                            <div key={element.id}>
                                <span>
                                    <Link to={`/categories/${element.key}`}>
                                        {element.description}
                                    </Link>
                                    <small>Contactores Weg</small>
                                    <ul>
                                        {element.subcategories.map((subelement) => {
                                            return (
                                                <li>
                                                    <Link
                                                        to={`/categories/${element.key}/${subelement.key}`}
                                                    >
                                                        {subelement.description}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </span>
                            </div>
                        );
                    })
                ) : (
                    <>
                        <span></span>
                        <ChargeAnimation />
                        <span></span>
                    </>
                )}
            </div>
        </>
    );
};

export default Productos;
