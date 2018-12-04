import React from "react";
import classNames from "classnames/bind";

import styles from "./composedModal.module.css";

let cx = classNames.bind(styles);

const ComposedModal = ({ isComposedModalOpen, children }) => {
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
        <div className={contentClassName}>{children}</div>
      </div>
    )
  );
};

export default ComposedModal;
