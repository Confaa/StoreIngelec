import React, { useEffect } from "react";
import "./Productos.scss";
const Productos = () => {
    /* const [resultado, setResultado] = useState(""); */
    useEffect(() => {
        let llamadaProductos = new Promise((pass, err) => {
            /* fetch(""); */
        });
        llamadaProductos.then((pass) => {
            console.log(pass);
        });
    }, []);

    return (
        <div>
            <h1>Productos</h1>
        </div>
    );
};

export default Productos;
