import React from "react";
import styles from "./modal-footer.module.css";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ModalFooter = ({ children, align }) => {
  const className = cx({
    base: true,
    "footer-space-between": align === "space-between",
    "footer-center": align === "center",
    "footer-end": align === "end"
  });
  return <div className={className}>{children}</div>;
};

export default ModalFooter;
