import React from "react";
import classNames from "classnames/bind";

import styles from "./modal-body.module.css";

const cx = classNames.bind(styles);

const ModalBody = ({ align, children }) => {
  const className = cx({
    base: true,
    center: align === "center",
    left: align === "left"
  });

  return <div className={className}>{children}</div>;
};

export default ModalBody;
