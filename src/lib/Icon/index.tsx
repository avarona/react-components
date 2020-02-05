import * as React from "react";

type Props = {
  dataTest?: string;
  addClass?: string;
  img: any;
  alt?: string;
  size?: number;
};

const Icon = ({ addClass, img, alt, size, dataTest }: Props) => {
  const SVG = typeof img === "object" && img;
  const datatest = dataTest ? `${dataTest}-icon` : "icon-container";

  const Component = () =>
    SVG ? (
      <SVG data-test={"icon"} />
    ) : (
      <img src={img} alt={alt} data-test={"icon"} />
    );

  return (
    <div className={addClass} style={{ width: size }} data-test={datatest}>
      <Component />
    </div>
  );
};

export default Icon;
