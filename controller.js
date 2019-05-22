const Task = require('./models')


module.exports = {
  index: async (req, res) => {
    console.log('hit controller');
    const task = await Task.find({})
      .catch(err => { console.error(err) });
    res.json(task);
  },

  display: async (req, res) => {
    const task = await Task.find({_id: req.params.id})
      .catch(err => { console.error(err) });
    res.json(task);
  },

  create: async (req, res) => {
    const newTask = await Task.create(req.body)
      .catch(err => { console.log('error --> ', err) });
    res.json(newTask);
  },

  update: async (req, res) => {
    console.log('hit controller', req.body);
    const updateTask = await Task.findByIdAndUpdate({_id: req.params.id}, req.body)
      .catch(err => { console.log('error --> ', err) })
    res.json(updateTask);
  },

  delete: async (req, res) => {
    const deleteTask = await Task.findByIdAndDelete({_id: req.params.id})
      .catch(err => { console.log('error --> ', err) })
    res.json(deleteTask);
  }
}