import React, { useState } from "react";

import Venue from "./Venue";

import "../../stylesheets/Venues.css";

export default function Venues(props) {
  const { venues } = props;

  let domVenues = null;

  if (venues.length > 0) {
    domVenues = (
      <ul className="venues__list">
        {venues.map((venue, idx) => {
          return <Venue venue={venue} key={venue.id || idx} />;
        })}
      </ul>
    );
  }

  return <div className="venues">{domVenues}</div>;
}
