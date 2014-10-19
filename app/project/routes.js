var Project = require('app/project/project')
var express = require('express');


function addProject(request, response) {
  response.render('project/addProject', {
    title: 'Add a New Project'
  });
}

function setup(app){
  app.use(express.static(__dirname + "../public"));
  app.get('/project', addProject);
}

module.exports = setup;

