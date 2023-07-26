const express = require('express')
const cors = require('cors');
const Controller = require('./controller');

module.exports = app => {
  app.use(
    express.json(),
    cors(),
  )

  app.get('/ping', Controller.ping)

  app.get(`/api/users/:name`, Controller.getUser)
  app.get(`/api/users`, Controller.getAllUsers)
  app.get(`/api/users/:username/details`, Controller.getDetailsUser)
  app.get(`/api/users/:username/repos`, Controller.getReposUser)
}