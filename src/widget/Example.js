import React from "react";
import ReactLoading from "react-loading";

const Example = ({ type, color }) => {
    return <ReactLoading type={type} color={color} height={100} width={70} />;
};

export default Example;
