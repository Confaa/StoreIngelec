import { getFirestore } from "firebase/firebaseSetup";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import SubNavBar from "./SubNavBar/SubNavBar";

let NavBar = ({ views }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const queryCategories = db.collection("categories").get();
        queryCategories
            .then((res) => {
                return res.docs;
            })
            .then((res) => {
                let aux = [];
                res.forEach((element) => {
                    aux.push({ id: element.id, ...element.data() });
                });
                setCategories(aux);
                console.log(aux);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container id="navBar">
            <ul>
                {views.map((link, indice) => {
                    return (
                        <li key={link.id}>
                            <span>
                                <NavLink to={"/" + link.key} exact>
                                    {link.description}
                                </NavLink>

                                {link.description === "Productos" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                                    </svg>
                                ) : (
                                    ""
                                )}
                            </span>
                            {link.description === "Productos" ? (
                                <SubNavBar categorias={categories} />
                            ) : (
                                ""
                            )}
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};

export default NavBar;
