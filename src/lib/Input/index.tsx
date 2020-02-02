import * as React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import Icon from "../Icon/index";

type Props = {
  addClass?: string;
  defaultValue?: string;
  onChange?: () => void;
  onKeyPress?: (value: string) => void;
  width?: number;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
};

const Input = ({
  addClass,
  defaultValue,
  onChange,
  width,
  leftIcon,
  rightIcon,
  disabled,
  onKeyPress
}: Props) => {
  const [text, setText] = React.useState(defaultValue || "");

  return (
    <div
      style={{ width }}
      className={classnames(addClass, styles.input, {
        [styles.disabled]: disabled
      })}
    >
      {leftIcon && (
        <Icon addClass={classnames(styles.icon, styles.left)} img={leftIcon} />
      )}

      {rightIcon && (
        <Icon
          addClass={classnames(styles.icon, styles.right)}
          img={rightIcon}
        />
      )}

      <input
        type='text'
        value={text}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.currentTarget.value);
          onChange && onChange();
        }}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            onKeyPress && onKeyPress(text);
            setText("");
          }
        }}
      />
    </div>
  );
};

export default Input;
