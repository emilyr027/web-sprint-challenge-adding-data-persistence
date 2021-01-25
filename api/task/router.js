// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('../task/model')
const router = express.Router()

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
    .then(data => {
      data.task_completed = !!data.task_completed
      res.status(201).json(data)
    })
      .catch((error) => {
        res.status(500).json({ message: 'error adding task' });
      });
  });
  
  router.get('/', (req, res) => {
    Tasks.getTasks()
    .then((data) => {
      data.forEach(data => {
        data.task_completed = !!data.task_completed
      }) 
        res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json({ message: 'error getting tasks' });
      });
  });

module.exports = router