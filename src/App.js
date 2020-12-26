import React from "react";
import "./App.scss";
import Home from "./components/Home/Home.js";
import ItemCount from "./components/ItemCount/ItemCount.js";
import Header from "./components/Header/Header";

function App() {
    const handleAdd = () => {};
    return (
        <div className="container-fluid">
            <Header />
            <Home />
            <ItemCount onAdd={handleAdd} initialValue={0} maxValue={5} />
        </div>
    );
}
export default App;
