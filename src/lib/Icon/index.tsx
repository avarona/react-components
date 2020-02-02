import * as React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  addClass?: string;
  img: any;
  alt?: string;
};

const Icon = ({ addClass, img, alt }: Props) => {
  const SVG = typeof img === "object" && img;

  return SVG ? (
    <SVG className={classnames(addClass, styles.icon)} />
  ) : (
    <img className={classnames(addClass, styles.icon)} src={img} alt={alt} />
  );
};

export default Icon;
