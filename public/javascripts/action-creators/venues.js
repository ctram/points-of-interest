import { SET_VENUES } from "../constants/venues";

import FourSquareHelper from "../lib/four-square-helper";

const fourSquareClient = new FourSquareHelper();

export function fetchVenues({ coordinates, near, query, limit }) {
  return dispatch => {
    return fourSquareClient
      .nearByVenues({ coordinates, near, query, limit })
      .then(venues => {
        return dispatch({ type: SET_VENUES, venues });
      })
      .catch(e => {
        console.error(e);
      });
  };
}
