/*
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;

var express = require('express');
var router = express.Router();
const postgres_controller = require("../controllers/postgresController.js");


/// User ROUTES ///


// GET all posts.
router.get("/usernames/", postgres_controller.all_usernames_get);



module.exports = router;





