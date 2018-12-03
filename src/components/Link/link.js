import React from "react";
import styles from "./link.module.css";

const Link = ({ external, location, children }) => {
  return (
    <a
      className={styles.base}
      href={location}
      target={external ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

export default Link;
