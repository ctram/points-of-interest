import React from "react";

import "../../stylesheets/Venue.css";

function Address(props) {
  const {
    location: { address, city, postalCode, state }
  } = props;

  let cityStatePostalCode = "";

  cityStatePostalCode += city || "";

  if (state) {
    cityStatePostalCode += ", " + state;
  }

  if (postalCode) {
    cityStatePostalCode += " " + postalCode;
  }

  return (
    <div className="address card-text">
      <div>{address}</div>
      <div>{cityStatePostalCode}</div>
      <div></div>
    </div>
  );
}

export default function Venue(props) {
  const {
    venue: { name, categories, location }
  } = props;

  let categoryTags = [];
  let domAddress = null;

  if (categories && categories.length) {
    categoryTags = categories.map((category, idx) => {
      return (
        <span
          className="badge badge-secondary venue__tag"
          key={category.id || idx}
        >
          {category.name}
        </span>
      );
    });
  }

  if (location) {
    domAddress = <Address location={location} />;
  }

  return (
    <div className="venue card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        {categoryTags.length !== 0 && (
          <h6 className="card-subtitle mb-2 text-muted venue__tags">
            {categoryTags}
          </h6>
        )}

        {domAddress}
      </div>
    </div>
  );
}
