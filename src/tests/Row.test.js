import React from "react";
import renderer from "react-test-renderer";
import Row from "../components/list/Row";
import { mockItem, mockStore } from "./mocks";

it("Row renders correctly", () => {
  const tree = renderer
    .create(<Row item={mockItem} store={mockStore} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
