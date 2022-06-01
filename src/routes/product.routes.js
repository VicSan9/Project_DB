const { Router } = require('express');
const { 
    getAllProducts, 
    getProduct, 
    createProduct, 
    deleteProduct, 
    updateProduct
} = require('../controllers/products.controller');

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProduct);

router.post('/products', createProduct);

router.delete('/products/:id', deleteProduct);

router.put('/products/:id', updateProduct);

module.exports = router;