import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import ItemCount from "./components/ItemCount/ItemCount.js";

function App() {
    const handleAdd = () => {};
    return (
        <div className="container-fluid">
            <NavBar />
            <Home />
            <ItemCount onAdd={handleAdd} initialValue={0} maxValue={5} />
        </div>
    );
}
export default App;
