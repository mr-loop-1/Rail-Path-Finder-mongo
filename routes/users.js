const express = require('express');
const router = express.Router();

const generatePath = require('./mongo_path_finder.js');
const getStations = require('./mongo_stations.js');

router.get("/stations", (req, res) => {

  console.log('hye Abdul Samad');
  const coll = String(req.query.city);

  (async () => {

    const stations = await getStations(coll);

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    res.status(200).json({stationsArray: stations});
  })();
});

// router.post("/details", function (req, res, next) {
//   coll = req.body.selectpicker;
//   coll = String(coll);
//   res.redirect("/");
// })

router.get("/path", (req, res) => {

  const start = String(req.query.st1);
  const stop = String(req.query.st2);

  const coll = String(req.query.city);

  (async () => {

    a = await generatePath(start, stop, coll);

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    res.status(200).json({pathArray: a});
  })();
})

module.exports = router;