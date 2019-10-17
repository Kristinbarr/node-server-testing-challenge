const router = require('express').Router()
const Resource = require('../resource/resource-model')

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.findAll()
    res.status(200).json(resources)
  } catch (error) {
    res.status(500).json({ message: "could not retrieve resources" })
  }
})

// router.getById('/:id', (req, res) => {})

router.post('/', async (req, res) => {
  try {
    await Resource.add(req.body)
    res.status(200).json({ message: 'success saving resource' })
  } catch (error) {
    res.status(500).json({ message: 'probem saving resource' })
  }
})


router.delete('/:id', (req, res) => {
  return Resource.remove(req.params.id)
  .where({id})
})

module.exports = router
