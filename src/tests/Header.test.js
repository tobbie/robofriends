import { shallow } from "enzyme";
import React from "react";
import Header from "../components/Header";

describe("searchbox tests", () => {
  it("expect to render header component", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
