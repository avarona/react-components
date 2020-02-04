import React from "react";
import { shallow } from "enzyme";

import Icon from "./";

describe("Icon Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Icon>Click Me!</Icon>);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
