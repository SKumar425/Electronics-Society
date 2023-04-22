import React from "react";

const H3 = (props) => {
  console.log(props);
  return (
    <h3
      className={`text-center text-xl font-medium text-gray-700 ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export default H3;
