import React from "react";
import classNames from "classnames/bind";

import styles from "./toggle.module.css";

let cx = classNames.bind(styles);

const Toggle = ({ isOn, states, handleToggle }) => {
  const toggleClassName = cx({
    base: true,
    "toggle-on": isOn === true,
    "toggle-off": isOn !== true,
    "no-text": Object.prototype.toString.call(states) !== "[object Array]",
    "no-text-toggle-on":
      isOn === true &&
      Object.prototype.toString.call(states) !== "[object Array]",
    "no-text-toggle-off":
      isOn !== true &&
      Object.prototype.toString.call(states) !== "[object Array]"
  });

  const switchClassName = cx({
    switch: true,
    "switch-on": isOn === true,
    "no-text-switch-on":
      isOn === true &&
      Object.prototype.toString.call(states) !== "[object Array]",
    "no-text-switch-off":
      isOn !== true &&
      Object.prototype.toString.call(states) !== "[object Array]"
  });

  const showToggle = () => {
    if (isOn === true && typeof states === "object") {
      return <span className={styles["toggle-text"]}>{states[1]}</span>;
    } else if (isOn === false && typeof states === "object") {
      return <span className={styles["toggle-text"]}>{states[0]}</span>;
    } else {
      return "";
    }
  };

  return (
    <label className={toggleClassName} onClick={() => handleToggle()}>
      <div className={switchClassName} />
      {showToggle()}
    </label>
  );
};

export default Toggle;
