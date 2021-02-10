import React, { useContext, useEffect } from "react";
import productContext from "context/ProductContext/ProductContext";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import SubNavBar from "./SubNavBar/SubNavBar";

let NavBar = ({ views }) => {
    const { categories } = useContext(productContext);

    /*  useEffect(() => {
        let toggle = document.getElementById("toggle");

        toggle.addEventListener("click", () => {
            let nav = document.getElementById("navBar").lastChild;

            if (nav.style.display === "none") {
                nav.style.display = "flex";
            } else {
                nav.style.display = "none";
            }
        });

        let liNav = document.getElementById("navBar").lastChild.childNodes;
        liNav[1].addEventListener("click", () => {
            let ref = document.getElementById("subNavBar");
            console.log(ref);

            if (ref.style.display === "none") {
                ref.style.display = "flex";
            } else {
                ref.style.display = "none";
            }
        });
    }, []); */

    const hamburguesa = (e) => {
        e.stopPropagation();
        let nav = document.getElementById("navBar").lastChild;
        console.log(nav.style.display);
        if (nav.style.display === "none") {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
        console.log(nav.style.display);
    };

    const subMenu = (e) => {
        e.stopPropagation();

        let ref = document.getElementById("subNavBar");
        console.log(ref);

        if (ref.style.display === "none") {
            ref.style.display = "flex";
        } else {
            ref.style.display = "none";
        }
    };

    return (
        <Container id="navBar">
            <div id="toggle" onClick={hamburguesa}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                {views.map((link) => {
                    return (
                        <li key={link.id}>
                            <span>
                                <NavLink to={"/" + link.key} exact>
                                    {link.description}
                                </NavLink>

                                {link.description === "Productos" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        onClick={subMenu}
                                    >
                                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                                    </svg>
                                ) : (
                                    ""
                                )}
                            </span>
                            {link.description === "Productos" && categories ? (
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
