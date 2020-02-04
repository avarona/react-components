import React from "react";
import { shallow } from "enzyme";

import ToggleSwitch from "./";

describe("ToggleSwitch Component", () => {
  it("renders", () => {
    const wrapper = shallow(<ToggleSwitch />);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("label input[type='checkbox']").exists()).toBe(true);
  });
});
