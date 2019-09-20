import React from "react";
import renderer from "react-test-renderer";
import UserSelector from "../components/start/UserSelector";

it("UserSelector renders correctly", () => {
  const tree = renderer.create(<UserSelector />).toJSON();
  expect(tree).toMatchSnapshot();
});
