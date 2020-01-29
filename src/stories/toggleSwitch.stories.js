import React from "react";
import { ToggleSwitch } from "../lib";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components",
  component: ToggleSwitch
};

export const _ToggleSwitch = () => (
  <>
    <ToggleSwitch onClick={action("clicked")} size={50} />
  </>
);
