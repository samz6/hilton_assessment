import { shallow } from "enzyme";
import React from "react";
import Room_Count from "../pages/Room_Count";

describe("With Enzyme", () => {
  it("Room_Count component should render", () => {
    const roomCount = shallow(
      <Room_Count
        personType="Adults"
        enable
        count={1}
        roomCountHandler={() => {}}
      />
    );
    expect(roomCount).toMatchSnapshot();
  });

  it("select should be disable when the room is unchecked(when enable is receieved as false)", () => {
    const roomCount = shallow(
      <Room_Count
        personType="Adults"
        enable={false}
        count={1}
        roomCountHandler={() => {}}
      />
    );
    // expect(roomCount.find("select")).hasAttribute("disabled");
    expect(roomCount.find("select").props()["disabled"]).toBe(true);
  });
});
