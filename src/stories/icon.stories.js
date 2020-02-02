import React from "react";
import { Icon } from "../lib";
import alarm16 from "../assets/alarm/16x16.png";
import alarm32 from "../assets/alarm/32x32.png";
import alarm64 from "../assets/alarm/64x64.png";
import alarm128 from "../assets/alarm/128x128.png";
import alarm256 from "../assets/alarm/256x256.png";
import { ReactComponent as alarmSVG } from "../assets/alarm/alarm-outline.svg";

export default {
  title: "Components",
  component: Icon
};

export const _Icon = () => (
  <>
    <Icon img={alarm16} alt='alarm clock 16x16' />
    <Icon svg={alarmSVG} alt='alarm clock svg' />
    <Icon img={alarm32} alt='alarm clock 32x32' />
    <Icon img={alarm64} alt='alarm clock 64x64' />
    <Icon img={alarm128} alt='alarm clock 128x128' />
    <Icon img={alarm256} alt='alarm clock 256x256' />
  </>
);
