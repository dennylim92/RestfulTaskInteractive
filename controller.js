const Task = require('./models')


module.exports = {

  index: async function(req, res) {

    const task = await Task.find({})
      .catch(err => { console.error(err) });
    res.json(task);

    // Task.find({})
    // .then(task => {
    //   res.json(task)
    // })
    // .catch(err => {
    //   console.error('error --> ', err);
    // })
  },

  display: async function(req, res) {
    console.log("controller ->", req.params.id);
    const task = await Task.find({_id: req.params.id})
      .catch(err => { console.error(err) });
      console.log(task);
    res.json(task);

    // Task.find({_id: req.params.id})
    // .then(task => {
    //   res.json({Data: task})
    // })
    // .catch(err => {
    //   console.log('error --> ', err);
    //   res.json();
    // })
  },

  create: function(req, res) {
    Task.create(req.body)
    .then(task => {
      res.json({Data: task});
    })
    .catch(err => {
      console.log('error --> ', err);
      res.json();
    })
  },

  update: function(req, res) {
    Task.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(task => {
      res.json({Data: task});
    })
    .catch(err => {
      console.log('error --> ', err);
      res.json();
    })
  },

  delete: function(req, res) {
    Task.findByIdAndDelete({_id: req.params.id})
    .then(task => {
      res.json({Data: task});
    })
    .catch(err => {
      console.log('error --> ', err);
      res.json();
    })
  }


}