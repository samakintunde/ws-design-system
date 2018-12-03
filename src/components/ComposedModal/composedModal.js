import React from "react";
import classNames from "classnames/bind";
import Button from "../Button/button";
import Icon from "../Icon/icon";

import styles from "./composedModal.module.css";

let cx = classNames.bind(styles);

const ComposedModal = ({
  iconSrc,
  isComposedModalOpen,
  title,
  handleComposedModal,
  children,
  footerAlign
}) => {
  const overlayClassName = cx({
    base: true,
    "modal-open": isComposedModalOpen === true,
    "modal-close": isComposedModalOpen !== true
  });

  const contentClassName = cx({
    "modal-content": isComposedModalOpen === true
  });

  const footerClassName = cx({
    footer: true,
    "footer-space-between": footerAlign === "space-between",
    "footer-center": footerAlign === "center",
    "footer-end": footerAlign === "end"
  });

  return (
    isComposedModalOpen && (
      <div className={overlayClassName}>
        <div className={contentClassName}>
          <div className={styles.main}>
            <div className={styles.header}>
              <div className={styles.label}>
                <Icon
                  className={styles.icon}
                  src={iconSrc}
                  alt="error"
                  type="danger"
                />
                <h3>{title}</h3>
              </div>
              <span
                className={styles["close-button"]}
                onClick={() => handleComposedModal()}
              >
                &times;
              </span>
            </div>
            {children}
          </div>
          <div className={footerClassName}>
            <Button
              type="danger"
              text="cancel"
              onClick={() => handleComposedModal()}
            />
            <Button
              type="primary"
              text="save"
              onClick={() => handleComposedModal()}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ComposedModal;
