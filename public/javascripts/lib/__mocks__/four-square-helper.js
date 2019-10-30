import venues from "../../../../tests/mock-data/venues";

export default class FourSquareHelper {
  nearByVenues({ coordinates, near, query, limit, v }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(venues);
      }, 0);
    });
  }
}
