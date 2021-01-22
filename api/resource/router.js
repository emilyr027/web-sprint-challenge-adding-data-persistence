// build your `/api/resources` router here
const express = require('express')
const Resources = require('../resource/model')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const addNewResource = await Resources.addResource(req.body)
    res.status(201).json(addNewResource)
  } catch (err) {
    res.status(500).json({ message: 'error adding a new resource' })
  }
})

  router.get('/', async (req,res,next) => {
    try{
        const data = await Resources.getResources()
        res.json(data)
    } catch(err) {
        next(err)
    }
})
module.exports = router