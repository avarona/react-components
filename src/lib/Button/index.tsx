import * as React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

type Props = {
  addClass?: string;
  children?: any;
  onClick?: () => void;
  type?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const Button = ({
  addClass,
  children,
  onClick,
  type = "primary",
  disabled = false
}: Props) => (
  <button
    className={classnames(addClass, styles.button, styles[`button-${type}`], {
      [styles["button-disabled"]]: !!disabled
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
