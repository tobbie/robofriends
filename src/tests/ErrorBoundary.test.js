import { shallow } from "enzyme";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

describe("error boundary tests", () => {
  it("expect to render error boundary component", () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });

  it("expect hasError to be false", () => {
    expect(shallow(<ErrorBoundary />).state()).toEqual({ hasError: false });
  });
});
