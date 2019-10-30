var express = require("express");
var router = express.Router();

const FourSquareClient = require("../lib/four-square-client");

router.get("/api/search_four_square", function(req, res, next) {
  let { query } = req;

  if (!query) {
    res.end();
  }

  const { query: fourSquareQuery, near, limit, coordinates } = query;

  new FourSquareClient()
    .nearByVenues({ near, query: fourSquareQuery, limit, coordinates })
    .then(venues => {
      res.json({ venues });
    })
    .catch(e => {
      res.status(500).json({ error: e.message });
    });
});

router.get(/.*/, function(req, res, next) {
  res.sendFile("/index.html");
});

module.exports = router;
