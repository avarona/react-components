import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../lib";

export default {
  title: "Components",
  component: Button
};

export const _Button = () => (
  <>
    <Button onClick={action("clicked")} type='primary'>
      Primary
    </Button>

    <Button onClick={action("clicked")} type='secondary'>
      Secondary
    </Button>

    <Button onClick={action("clicked")} type='danger'>
      Danger
    </Button>

    <Button onClick={action("clicked")} disabled={true}>
      Danger
    </Button>
  </>
);
