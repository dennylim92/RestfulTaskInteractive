const Task = require('./models')


module.exports = {

  index: function(req, res) {
    Task.find({})
    .then(task => {
      res.json({Data: task})
    })
    .catch(err => {
      console.log('error --> ', err);
      res.redirect('/');
    })
  },

  display: function(req, res) {
    Task.find({_id: req.params.id})
    .then(task => {
      res.json({Data: task})
    })
    .catch(err => {
      console.log('error --> ', err);
      res.redirect('/');
    })
  },

  create: function(req, res) {
    Task.create(req.body)
    .then(task => {
      res.redirect('/');
    })
    .catch(err => {
      console.log('error --> ', err);
      res.redirect('/');
    })
  },

  update: function(req, res) {
    Task.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(task => {
      res.redirect('/');
    })
    .catch(err => {
      console.log('error --> ', err);
      res.redirect('/');
    })
  },

  delete: function(req, res) {
    Task.findByIdAndDelete({_id: req.params.id})
    .then(task => {
      res.redirect('/');
    })
    .catch(err => {
      console.log('error --> ', err);
      res.redirect('/');
    })
  }


}