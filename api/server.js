const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const resourceRouter = require('../resource/resource-router')

const server = express()

//gloable middleware
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/resources', resourceRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' })
})

module.exports = server
