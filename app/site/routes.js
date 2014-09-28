var express = require('express');
/* GET home page. */
function index(req, res) {
  res.render('index', {
    title: 'Express'
  });
}

function setup(app){
  app.use(express.static(__dirname + "../public"));
  app.get('/', index);
}

module.exports = setup;
