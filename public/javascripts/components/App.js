import React from "react";

import SearchBar from "./SearchBar";
import Venues from "./Venues";
import Spinner from "./Spinner";

import "../../stylesheets/style.css";
import "../../stylesheets/App.css";

const initialLocation = "San Francisco";
const initialQuery = "Restaurants";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let { venues, shouldShowSpinner } = props;

    this.state = {
      venues,
      shouldShowSpinner
    };

    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  componentDidMount() {
    const { fetchVenues } = this.props;

    fetchVenues({ query: initialQuery, near: initialLocation });
  }

  componentDidUpdate(prevProps) {
    const {
      venues: prevVenues,
      shouldShowSpinner: prevShouldShowSpinner
    } = prevProps;

    const { venues, shouldShowSpinner } = this.props;

    if (prevVenues !== venues || prevShouldShowSpinner !== shouldShowSpinner) {
      this.setState({ venues, shouldShowSpinner });
    }
  }

  handleSubmitSearch({ query, near }) {
    const { fetchVenues } = this.props;

    fetchVenues({ query, near });
  }

  render() {
    const { venues, shouldShowSpinner } = this.state;

    const domEmptyList = (
      <div className="text-center mt-5">Search for some venues!</div>
    );

    return (
      <div className="app">
        <header className="app__header">
          <h1>Near By Venues!</h1>
        </header>
        <SearchBar onSubmitSearch={this.handleSubmitSearch} />
        {(shouldShowSpinner && <Spinner />) ||
          ((venues.length === 0 && domEmptyList) || <Venues venues={venues} />)}
      </div>
    );
  }
}
