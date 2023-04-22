import React from "react";

const Glassmorphism = (props) => {
  return (
    <div
      className={`bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl shadow rounded-4xl border-white border-3 mx-7 top-24 ${
        props.hideOnPhone ? "hidden md:block" : "block"
      }`}
      style={{
        maxWidth: "270px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Glassmorphism;
