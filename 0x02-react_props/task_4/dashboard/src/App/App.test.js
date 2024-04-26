import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications/>)).toEqual(true);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it("it contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toEqual(true);
  });
  

  it("it contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toEqual(true);
  });

  it("does not contain the CourseList component when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).toEqual(false);
  });

  describe("when isLoggedIn is true", () => {
    it("does not contain the Login component", () => {
      const wrapper = shallow(<App isLoggedIn />);
      expect(wrapper.contains(<Login />)).toEqual(false);
    });

    it("contains the CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn />);
      expect(wrapper.contains(<CourseList />)).toEqual(true);
    });
  });
});

