import React from "react";
import classNames from "classnames/bind";

import styles from "./select.module.css";

let cx = classNames.bind(styles);

const Select = ({ options, handleSelect }) => {
  const className = cx({
    base: true
  });

  return (
    <select className={className} onSelect={() => handleSelect()}>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
