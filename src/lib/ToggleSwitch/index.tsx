import * as React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  dataTest?: string;
  addClass?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: number;
};

const ToggleSwitch = ({
  addClass,
  onClick,
  disabled,
  size = 50,
  dataTest
}: Props) => {
  const [valueOn, setValue] = React.useState(false);

  const handleClick = () => {
    setValue(!valueOn);
    onClick && onClick();
  };

  const inlineStyles = {
    label: {
      width: size,
      height: size / 2
    },
    span: {
      width: size / 2,
      height: size / 2
    }
  };

  return (
    <label
      data-test={`${dataTest}-toggle` || "toggle"}
      style={inlineStyles.label}
      className={classnames(addClass, styles.toggleSwitch, {
        [styles.toggled]: valueOn
      })}
    >
      <input
        className={styles.checkbox}
        type='checkbox'
        onClick={handleClick}
        disabled={disabled}
        defaultChecked={!disabled && valueOn}
      />
      <span style={inlineStyles.span} className={styles.slider} />
    </label>
  );
};

export default ToggleSwitch;
