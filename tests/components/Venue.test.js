import React from "react";
import Venue from "../../public/javascripts/components/Venue";
import renderer from "react-test-renderer";

import venues from "../mock-data/venues";

test("Venue component shows details", () => {
  const component = renderer.create(<Venue venue={venues[0]} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
