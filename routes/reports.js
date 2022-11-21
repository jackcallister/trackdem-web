var express = require('express');
var router = express.Router();

var sdk = require('@directus/sdk');
var directus = new sdk.Directus('https://7pw163q0.directus.app');

/* GET reports show. */
router.get('/:id', async function(req, res, next) {
  try {
    const report = await directus.items('reports').readOne(1, { fields: "*.*.*" });
    res.render('report', { actions: report.resolutions[0].actions });
  }
  catch(error){
    console.log(error.message)
  }
});

module.exports = router;
