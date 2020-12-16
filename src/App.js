import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";

function App() {
    return (
        <div className="container-fluid">
            <NavBar />
            <Home />
        </div>
    );
}
export default App;
