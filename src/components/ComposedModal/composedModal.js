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
  children
}) => {
  const overlayClassName = cx({
    base: true,
    "modal-open": isComposedModalOpen === true,
    "modal-close": isComposedModalOpen !== true
  });

  const contentClassName = cx({
    "modal-content": isComposedModalOpen === true
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
          <div className={styles.footer}>
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
