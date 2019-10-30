import React, { useState } from "react";

import "../../stylesheets/SearchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      location: ""
    };

    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuery(e) {
    const value = e.target.value;

    this.setState({ query: value });
  }

  handleChangeLocation(e) {
    const value = e.target.value;

    this.setState({ location: value });
  }

  handleSubmit(e) {
    const { onSubmitSearch } = this.props;
    const { query, location } = this.state;

    e.preventDefault();

    onSubmitSearch({ query, near: location });
  }

  render() {
    const { query, location } = this.state;

    return (
      <div className="search-bar">
        <form
          className="form-inline search-bar__form"
          onSubmit={this.handleSubmit}
        >
          <input
            onChange={this.handleChangeLocation}
            value={location}
            type="text"
            className="form-control mb-2 mr-sm-2 search-bar__input search-bar__input--location"
            id="input-location"
            placeholder="San Francisco"
          />
          <input
            onChange={this.handleChangeQuery}
            value={query}
            type="text"
            className="form-control mb-2 mr-sm-2 search-bar__input--query"
            placeholder="Coffee shop, restaurants, bars..."
          />
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
    );
  }
}
