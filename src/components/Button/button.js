import React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

let cx = classNames.bind(styles);

const Button = props => {
  let className = cx({
    base: true,
    default: props.type === "default",
    disabled: props.disabled,
    danger: props.type === "danger",
    primary: props.type === "primary"
  });

  return (
    <button
      className={className}
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
};

export default Button;
