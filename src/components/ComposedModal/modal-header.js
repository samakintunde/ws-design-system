import React from "react";
import styles from "./modal-header.module.css";

const ModalHeader = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default ModalHeader;
