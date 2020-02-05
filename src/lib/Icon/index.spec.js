import React from "react";
import { shallow } from "enzyme";

import Icon from "./";

describe("Icon Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Icon img='an image' />);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
