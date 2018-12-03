import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.css";

let cx = classNames.bind(styles);

class TextArea extends Component {
  state = {
    value: ""
  };

  handleInput = e => {
    console.log(e.target.value);
  };

  render() {
    let { label, placeholder, disabled } = this.props;

    let className = cx({
      base: true,
      disabled: disabled === true
    });

    return (
      <label className={styles.label}>
        <p>{label}</p>
        <textarea
          className={className}
          placeholder={placeholder}
          disabled={disabled}
          cols="30"
          rows="5"
          onChange={e => this.handleInput(e)}
        />
      </label>
    );
  }
}

export default TextArea;
