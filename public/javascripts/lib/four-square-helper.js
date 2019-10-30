const BASE_URL = `http://localhost:3000/api/search_four_square?`;

export default class FourSquareHelper {
  nearByVenues({ coordinates, near, query, limit }) {
    let url = BASE_URL;

    if (near) {
      url += `&near=${near}`;
    }

    url += `&query=${query}`;

    let status = null;

    return fetch(url)
      .then(res => {
        status = res.status;

        return res.json();
      })
      .then(json => {
        if (status !== 200) {
          let { error } = json;

          error = error || "Error fetching venues";

          throw Error(error);
        }

        return json.venues;
      });
  }
}
