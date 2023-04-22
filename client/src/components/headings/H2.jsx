import React from "react";

const H2 = (props) => {
  return (
    <h1 className={`text-center text-2xl text-purple-700 ${props.className}`}>
      {props.children}
    </h1>
  );
};

export default H2;
