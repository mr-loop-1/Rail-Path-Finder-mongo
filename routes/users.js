var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

var func = require('./mongo.js');
var funcoun = require('./mongo2.js');

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

var coll = "newDelhi";
var start, stop;
var count = [];
var a = [];

router.get("/ida", function (req, res, next) {
  console.log('hye');
  coll = String(req.query.city);
  // console.log("coll", coll);
  // coll = "Delhi";

  (async function () {

    count = await funcoun(coll);
    console.log(coll);
    console.dir(count);

    // count = (coll==="Vice") ? ["asd","bsd"] : ["qwe","wer","ert"];
    // res.render("index2", { title: 'some data', userdataa: a, imgsrc: coll, coun: count });\
    // console.log(res);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.status(200).json({toFill: count});
    a = [];

  })();
});



// router.post("/details", function (req, res, next) {
//   coll = req.body.selectpicker;
//   coll = String(coll);

//   res.redirect("/");

// })


router.get("/query", function (req, res, next) {
  // start = req.body.selectpicker1;

  console.log("hello there");

  start = String(req.query.st1);
  stop = String(req.query.st2);

  coll = String(req.query.city);

  // start = String(start);         // a very big bug with toString()
  // stop = String(stop);

  (async function () {
    // a = await func(start, stop, coll, () => {
    //   res.redirect("/users/index2");
    // });
    a = await func(start, stop, coll);
    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyy",a);
    // res.redirect("/");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.status(200).json({toPath: a});

  })();
})

module.exports = router;