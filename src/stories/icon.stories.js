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

const styles = {
  section: {
    display: "flex",
    alignItems: "center"
  },
  h3: {
    paddingRight: "50px"
  }
};

export const _Icon = () => (
  <>
    <h1>PNG vs SVG</h1>
    <section style={styles.section}>
      <h3 style={styles.h3}>16x16</h3>
      <Icon img={alarm16} alt='alarm clock 16x16' />
      <Icon img={alarmSVG} alt='alarm clock svg' size={16} />
    </section>
    <section style={styles.section}>
      <h3 style={styles.h3}>32x32</h3>
      <Icon img={alarm32} alt='alarm clock 32x32' />
      <Icon img={alarmSVG} alt='alarm clock svg' size={32} />
    </section>
    <section style={styles.section}>
      <h3 style={styles.h3}>64x64</h3>
      <Icon img={alarm64} alt='alarm clock 64x64' />
      <Icon img={alarmSVG} alt='alarm clock svg' size={64} />
    </section>
    <section style={styles.section}>
      <h3 style={styles.h3}>128x128</h3>
      <Icon img={alarm128} alt='alarm clock 128x128' />
      <Icon img={alarmSVG} alt='alarm clock svg' size={128} />
    </section>
    <section style={styles.section}>
      <h3 style={styles.h3}>256x256</h3>
      <Icon img={alarm256} alt='alarm clock 256x256' />
      <Icon img={alarmSVG} alt='alarm clock svg' size={256} />
    </section>
  </>
);
