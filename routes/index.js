var express = require('express');
var router = express.Router();

var sdk = require('@directus/sdk');
var directus = new sdk.Directus('https://l8fxmcjv.directus.app');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index');
});


module.exports = router;
