import React from "react";
import { action } from "@storybook/addon-actions";
import { Input } from "../lib";
import { ReactComponent as alarmSVG } from "../assets/alarm/alarm-outline.svg";

export default {
  title: "Components",
  component: Input
};

export const _Input = () => (
  <>
    <Input
      onChange={action("text")}
      width={150}
      placeholder='type something...'
    />
    <br />
    <Input onChange={action("text")} width={250} leftIcon={alarmSVG} />
    <br />
    <Input onChange={action("text")} width={350} rightIcon={alarmSVG} />
    <br />
    <Input onChange={action("text")} width={350} disabled />
  </>
);
