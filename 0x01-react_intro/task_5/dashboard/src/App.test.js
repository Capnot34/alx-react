import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("header.App-header").exists()).toEqual(true);
  });

  it("renders App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-body").exists()).toEqual(true);
  });

  it("renders App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("footer.App-footer").exists()).toEqual(true);
  });
});

