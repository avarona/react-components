import React from "react";
import { shallow } from "enzyme";

import Button from "./";

describe("Button Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Button>Click Me!</Button>);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
