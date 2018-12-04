import React from "react";
import classNames from "classnames/bind";

import styles from "./icon.module.css";

const cx = classNames.bind(styles);

const Icon = ({ alt, src, type }) => {
  const className = cx({
    base: true,
    primary: type === "primary",
    danger: type === "danger",
    secondary: type === "secondary",
  });

  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
