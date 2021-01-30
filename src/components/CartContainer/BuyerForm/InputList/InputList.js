import cartContext from "context/CartContext/CartContext";
import React, { useContext } from "react";
import Input from "./Input/Input";
import "./InputList.scss";
const InputList = () => {
    const { form } = useContext(cartContext);
    const { setNombre, setTelefono, setEmail, setRepEmail } = form;
    const parametrosInput = [
        {
            label: "Nombre",
            id: "nombre",
            type: "text",
            funcionSet: setNombre,
            placeholder: "EJ: Juan Perez",
            requisitos: "*Ingrese su nombre completo"
        },
        {
            label: "Telefono",
            id: "telefono",
            type: "tel",
            funcionSet: setTelefono,
            placeholder: "541111111111",
            requisitos: "*Ingrese su numero de telefono completo (sin + ni espacios)"
        },
        {
            label: "Email",
            type: "email",
            id: "email",
            funcionSet: setEmail,
            placeholder: "EJ: juanperez@aaaaa.com",
            requisitos: "*Ingrese su correo electronico "
        },
        {
            label: "Repetir Email",
            type: "email",
            id: "repEmail",
            funcionSet: setRepEmail,
            placeholder: "juanperez@aaaaa.com",
            requisitos: "*Ingrese su email nuevamente (debe coincidir con el anterior)"
        }
    ];
    return (
        <div id="inputList">
            {parametrosInput.map((element) => {
                return (
                    <Input
                        label={element.label}
                        type={element.type}
                        id={element.id}
                        funcionSet={element.funcionSet}
                        placeholder={element.placeholder}
                        requisitos={element.requisitos}
                        key={element.label}
                    />
                );
            })}
        </div>
    );
};

export default InputList;
