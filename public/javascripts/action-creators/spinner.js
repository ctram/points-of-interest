import { SHOW_SPINNER, HIDE_SPINNER } from "../constants/spinner";

export function updateSpinner(shouldShowSpinner) {
  return { type: shouldShowSpinner ? SHOW_SPINNER : HIDE_SPINNER };
}
