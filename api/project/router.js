// build your `/api/projects` router here
const express = require('express')
const Projects = require('../project/model')
const router = express.Router()

router.post('/', (req, res) => {
    Projects.addProject(req.body)
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        res.status(500).json({ message: 'error updating project' })
      })
  })

router.get('/', async (req, res) => {
  Projects.getProjects()
  .then((data) => {
      res.status(200).json(data)
  })
  .catch(err => {
      res.status(500).json({ message: 'error retrieving projects' })
  })
})

module.exports = router