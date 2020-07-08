import { shallow } from "enzyme";
import React from "react";
import SearchBox from "../components/SearchBox";

describe("searchbox tests", () => {
  it("expect to render searchbox component", () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
