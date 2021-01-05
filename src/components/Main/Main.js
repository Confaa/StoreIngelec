import React from "react";
import { Route, Switch } from "react-router-dom";

import Productos from "./Productos/Productos";
import Cuenta from "./Cuenta/Cuenta";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import "./Main.scss";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    <ItemListContainer />
                </Route>
                <Route path="/category/:id" exact>
                    <ItemListContainer />
                </Route>
                <Route path="/category/:id/:subid" exact>
                    <ItemListContainer />
                </Route>
                <Route path="/Productos">
                    <Productos />
                </Route>
                <Route path="/Cuenta">
                    <Cuenta />
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
