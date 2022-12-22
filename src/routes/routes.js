const router = require('express').Router()

const ProductsController = require('../controllers/products')

//VERBOS HTTP
//GET - obter dados
//POST - enviar dados
//PUT - atualizar dados
//DELETE - remover dados

router.get('/products/:id?',ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)

module.exports = router
