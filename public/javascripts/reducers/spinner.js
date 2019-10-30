import { SHOW_SPINNER, HIDE_SPINNER } from "../constants/spinner";

const initialState = { shouldShowSpinner: false };

export default function venues(state = initialState, action) {
  const { type, venues } = action;

  switch (type) {
    case SHOW_SPINNER:
      return { shouldShowSpinner: true };
    case HIDE_SPINNER:
      return { shouldShowSpinner: false };
    default:
      return state;
  }
}
