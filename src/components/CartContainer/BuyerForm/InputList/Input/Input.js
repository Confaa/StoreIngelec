import React from "react";
import "./Input.scss";
const Input = ({ label, text, id, funcionSet, placeholder, requisitos }) => {
    return (
        <span className="inp">
            <label htmlFor={id}>{label + ":"}</label>
            <input
                type={text}
                id={id}
                onChange={(e) => {
                    funcionSet(e.target.value);
                }}
                placeholder={placeholder}
            />
            <p>{requisitos}</p>
        </span>
    );
};

export default Input;
