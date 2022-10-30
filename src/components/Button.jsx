import React from "react";

const Button = (props) => {
  return (
      <a
        href={props.href}
        id={props.id}
        target="_blank"
        title={props.title}
        className="filter py-4 outline-none text-center rounded-md"
      >
        {props.name}
      </a>
  );
};

export default Button;
