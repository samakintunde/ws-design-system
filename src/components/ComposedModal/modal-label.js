import React from "react";
import styles from "./modal-label.module.css";

const ModalLabel = ({ children }) => {
  return <div className={styles.label}>{children}</div>;
};

export default ModalLabel;
