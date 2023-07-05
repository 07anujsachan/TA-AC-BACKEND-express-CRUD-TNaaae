var express  = require('express');

 var router = express.router();

 router.get('/new' ,(req, res) => {
res.render('stundentsForm')
 })
  module.exports = router;