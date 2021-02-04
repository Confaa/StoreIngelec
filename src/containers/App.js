import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "layout/Header/Header";
import Main from "layout/Main/Main";
import Footer from "layout/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import CustomProviderCart from "context/CartContext/CustomProviderCart";
import CustomProviderProducts from "context/ProductContext/CustomProviderProducts";
import { Container } from "react-bootstrap";
import { getFirestore } from "firebase/firebaseSetup";
import ChargePage from "widget/ChargePage/ChargePage";

function App() {
    const [views, setViews] = useState();

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            const queryViews = db.collection("views").get();
            queryViews
                .then((res) => {
                    return res.docs;
                })
                .then((res) => {
                    let aux = [];
                    res.forEach((element) => {
                        aux.push({ id: element.id, ...element.data() });
                    });

                    let ordenamiento = { Home: 1, Productos: 2, Cuenta: 3 };

                    aux.sort((a, b) => {
                        return ordenamiento[a.description] - ordenamiento[b.description];
                    });

                    console.table(aux);
                    setViews(aux);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, [2500]);
    }, []);

    return (
        <Container fluid className="grilla">
            <BrowserRouter>
                {views ? (
                    <>
                        <CustomProviderProducts>
                            <CustomProviderCart>
                                <Header views={views} />
                                <Main />
                            </CustomProviderCart>
                        </CustomProviderProducts>
                        <Footer views={views} />
                    </>
                ) : (
                    <ChargePage />
                )}
            </BrowserRouter>
        </Container>
    );
}
export default App;
