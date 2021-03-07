const express = require('express')
const routes = express.Router()
const listController = require('../controller/listController')

routes.post('/', listController.create)
routes.get('/', listController.findAll)
routes.get('/:id', listController.findById)
routes.delete('/:id', listController.deleteById)
routes.put('/:id', listController.updateById)

module.exports = routes