import React from "react";
import Venues from "../../public/javascripts/components/Venues";
import renderer from "react-test-renderer";

import venues from "../mock-data/venues";

test("Venues component displays a list of venues", () => {
  const component = renderer.create(<Venues venues={venues} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
