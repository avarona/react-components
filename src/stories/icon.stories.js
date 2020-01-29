import React from "react";
import { Icon } from "../lib";
import alarm16 from "../assets/alarm/16x16.png";
import alarm32 from "../assets/alarm/32x32.png";
import alarm64 from "../assets/alarm/64x64.png";
import alarm128 from "../assets/alarm/128x128.png";
import alarm256 from "../assets/alarm/256x256.png";

export default {
  title: "Components",
  component: Icon
};

export const _Icon = () => (
  <>
    <Icon img={alarm16} alt='alarm clock' />
    <Icon img={alarm32} alt='alarm clock' />
    <Icon img={alarm64} alt='alarm clock' />
    <Icon img={alarm128} alt='alarm clock' />
    <Icon img={alarm256} alt='alarm clock' />
  </>
);
