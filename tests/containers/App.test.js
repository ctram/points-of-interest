jest.mock("../../public/javascripts/lib/four-square-helper");
jest.useFakeTimers();
import renderer from "react-test-renderer";

import React from "react";
import { shallow, mount } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import store from "../../public/javascripts/store/index";

import AppContainer from "../../public/javascripts/containers/App";
import SearchBar from "../../public/javascripts/components/SearchBar";
import Venues from "../../public/javascripts/components/Venues";
import Venue from "../../public/javascripts/components/Venue";
import Spinner from "../../public/javascripts/components/Spinner";

test("AppContainer component displays a list of venues after fetching initial data", done => {
  const wrapper = mount(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );

  expect(wrapper.text()).toEqual(expect.stringContaining("Near By Venues!"));
  expect(wrapper.find(SearchBar)).toHaveLength(1);

  jest.runAllTimers();

  setImmediate(() => {
    const html = wrapper.render();

    expect(html.find(".venues")).toHaveLength(1);
    expect(html.find(".venue")).toHaveLength(3);

    done();
  });
});

test("AppContainer component displays loading spinner on initial mounting", () => {
  const wrapper = mount(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );

  expect(wrapper.find(Spinner)).toHaveLength(1);
});
