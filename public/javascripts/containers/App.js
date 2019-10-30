import { connect } from "react-redux";
import App from "../components/App";

import { fetchVenues } from "../action-creators/venues";
import { updateSpinner } from "../action-creators/spinner";

const mapStateToProps = state => {
  return {
    venues: state.venues,
    shouldShowSpinner: state.spinner.shouldShowSpinner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVenues: query => {
      dispatch(updateSpinner(true));

      dispatch(fetchVenues(query)).finally(() => {
        dispatch(updateSpinner(false));
      });
    },
    updateSpinner: shouldShowSpinner => {
      dispatch(updateSpinner(shouldShowSpinner));
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
