import { SET_VENUES } from "../constants/venues";

const initialState = [];

export default function venues(state = initialState, action) {
  const { type, venues } = action;

  switch (type) {
    case SET_VENUES:
      return venues;
    default:
      return state;
  }
}
