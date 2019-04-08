import { shallow } from "enzyme";
import React from "react";

import Room from "../pages/Room";

describe("With Enzyme", () => {
  it("Room should render", () => {
    const room = shallow(
      <Room
        room={{}}
        checkHandler={() => {}}
        roomCountChangeHandler={() => {}}
      />
    );
    expect(room).toMatchSnapshot();
  });
});
