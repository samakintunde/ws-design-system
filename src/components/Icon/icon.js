import React from "react";
import classNames from "classnames/bind";

import styles from "./icon.module.css";
import icon from "../../assets/error.png";

const cx = classNames.bind(styles);

const Icon = ({ alt, src, type }) => {
  const className = cx({
    base: true,
    primary: type === "primary",
    danger: type === "danger"
  });
  return (
    <div className={className}>
      <img src={icon} alt={alt} />
    </div>
  );
};

export default Icon;
