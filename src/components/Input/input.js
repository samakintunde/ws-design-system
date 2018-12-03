import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./input.module.css";

let cx = classNames.bind(styles);

class Input extends Component {
  state = {
    value: ""
  };

  handleInput = e => {
    console.log(e.target.value);
  };

  render() {
    const { disabled, type, placeholder } = this.props;

    let className = cx({
      base: true,
      text: type === "text" || type === "email" || type === "number",
      password: type === "password",
      disabled: disabled === true
    });

    return (
      <input
        className={className}
        type={type}
        placeholder={type === "password" ? "" : placeholder}
        disabled={disabled}
        onChange={e => this.handleInput(e)}
      />
    );
  }
}

export default Input;
