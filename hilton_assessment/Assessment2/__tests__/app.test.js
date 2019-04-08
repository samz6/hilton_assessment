import { shallow } from "enzyme";
import React from "react";

import App from "../pages/app";
import Room from "../pages/Room";

describe("With Enzyme", () => {
  it("Should render 4 room components", () => {
    const app = shallow(<App />);
    expect(app.find(Room)).toHaveLength(4);
  });
});
