import React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

let cx = classNames.bind(styles);

const Button = ({ text, type, disabled, onClick }) => {
  let className = cx({
    base: true,
    default: type === "default",
    disabled: disabled,
    danger: type === "danger",
    primary: type === "primary"
  });

  return (
    <button className={className} disabled={disabled} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;
