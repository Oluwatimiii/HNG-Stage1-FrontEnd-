import React from "react";

const Button = (props) => {
  return (
    <button id={props.id} className="filter py-4 outline-none rounded-md">
      <a href={props.href} target="_blank" >{props.name}</a>
    </button>
  );
};

export default Button;
