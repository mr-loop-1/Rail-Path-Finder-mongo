var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

var func = require('./mongo.js');
var funcoun = require('./mongo2.js');
var client = require('../database');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


var variabled = "Station";
var start, stop, coll, b;
var count = [];
var a = [];

router.get("/index2", function(req, res, next) {
  console.log(variabled);

  res.render("index2", {title: 'some data', userdataa: a, imgsrc : variabled, coun : count});
//   variabled = 0;
});

router.post("/details", function(req, res, next) {
  variabled = req.body.selectpicker;
  coll = req.body.selectpicker;

  console.log("var = ",variabled);
/*
  if(variabled == 1) {
    coll = 'Station';
  }
  else if(variabled == 2) {
    coll = 'Station2';
  }
*/
  //res.status('200').send({title: 'some data', imgsrc : variabled});
  //event.preventDefault()

  (async function() {
  //  count = await client.db('metro4').collection(coll).countDocuments({});
    count = await funcoun(coll);
    console.log("count ",count);

    res.redirect("/users/index2");
  }) ();

  
})


router.post("/query", function(req, res, next) {
  start = req.body.selectpicker1;
  stop = req.body.selectpicker2;

//  start= parseInt(start);
//  stop = parseInt(stop);

  start = String(start);         // a very big bug
  stop = String(stop);
/*
  if(variabled == 1) {
    coll = 'Station';
  }
  else if(variabled == 2) {
    coll = 'Station2';
  }
*/
  console.log("from",start," to", stop, "in", coll);

  (async function() {
    console.log("Reached");
    b = await client.db('metro4').collection(coll).findOne({"_id":1});
    console.log(b);
    a = await func(start, stop, coll);
    console.log(a);
    

    res.redirect("/users/index2");
  })();
})

module.exports = router;
