import React from "react";
import classNames from "classnames/bind";

import styles from "./modal.module.css";

let cx = classNames.bind(styles);

const Modal = ({ isOpen, title, handleModal, children }) => {
  const overlayClassName = cx({
    base: true,
    "modal-open": isOpen === true,
    "modal-close": isOpen !== true
  });

  const contentClassName = cx({
    "modal-content": isOpen === true
  });

  return (
    isOpen && (
      <div className={overlayClassName}>
        <div className={contentClassName}>
          <div className={styles.header}>
            <h3>{title}</h3>
            <span
              className={styles["close-button"]}
              onClick={() => handleModal()}
            >
              &times;
            </span>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
