const controller = require('./controller')


module.exports = function(app) {
  app.get('/tasks', controller.index)
  app.get('/task/:id', controller.display)
  app.post('/task/create', controller.create)
  app.put('/task/:id', controller.update)
  app.delete('/task/:id', controller.delete)
}