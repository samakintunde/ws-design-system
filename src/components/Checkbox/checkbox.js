import React from "react";
import classNames from "classnames/bind";

import styles from "./checkbox.module.css";

const cx = classNames.bind(styles);

const Checkbox = ({ handleCheckbox, isChecked }) => {
  const checkboxClassName = cx({
    base: true,
    checked: isChecked === true
  });

  return (
    <label className={checkboxClassName} onClick={() => handleCheckbox()}>
      <input className={styles.base} type="checkbox" />
      <span />
    </label>
  );
};

export default Checkbox;
