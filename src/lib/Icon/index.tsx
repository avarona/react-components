import * as React from "react";

type Props = {
  addClass?: string;
  img: string;
  alt?: string;
};

const Icon = ({ addClass, img, alt }: Props) => {
  return <img className={addClass} src={img} alt={alt} />;
};

export default Icon;
