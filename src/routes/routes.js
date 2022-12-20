const router = require('express').Router()

const ProductsController = require('../controllers/products')

//VERBOS HTTP
//GET - obter dados
//POST - enviar dados
//PUT - atualizar dados
//DELETE - remover dados

router.get('/products/:id?',ProductsController.get)


module.exports = router
