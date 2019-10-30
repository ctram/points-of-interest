require("isomorphic-fetch");

const BASE_URL = `https://api.foursquare.com/v2/venues/explore?${process.env.FOUR_SQUARE_CREDENTIALS}`;

const VERSION = "20180323";

module.exports = class FourSquareClient {
  nearByVenues({ coordinates, near, query, limit, v }) {
    limit = limit || "25";
    v = v || "20180323";

    let url = BASE_URL + `&v=${VERSION}`;

    if (coordinates) {
      url += `&ll=${coordinates}`;
    }

    if (near) {
      url += `&near=${near}`;
    }

    url += `&query=${query}&limit=${limit}`;

    let status = null;

    return fetch(url)
      .then(res => {
        status = res.status;

        return res.json();
      })
      .then(json => {
        if (status !== 200) {
          const error =
            (json.meta && json.meta.errorDetail) || "Error fetching venues";

          throw Error(error);
        }

        let venues = [];

        const groups = (json.response && json.response.groups) || [];

        const recommendedGroup = groups.find(
          group => group.name === "recommended"
        );

        if (recommendedGroup) {
          venues = recommendedGroup.items.map(item => item.venue);
        }

        return venues;
      });
  }
};
