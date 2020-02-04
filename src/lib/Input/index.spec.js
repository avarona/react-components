import React from "react";
import { shallow } from "enzyme";

import Input from "./";

describe("Input Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
