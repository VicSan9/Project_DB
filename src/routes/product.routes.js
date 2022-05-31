const { Router } = require('express');
const { 
    getAllProducts, 
    getProduct, 
    createProduct, 
    deleteProduct, 
    updateProduct
} = require('../controllers/products.controller')

const router = Router();

router.get('/products', getAllProducts)

router.get('/products/10', getProduct)

router.post('/products', createProduct)

router.delete('/products', deleteProduct)

router.put('/products', updateProduct)

module.exports = router;