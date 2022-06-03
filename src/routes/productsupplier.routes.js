const { Router } = require('express');
const { 
    getAllProductSupplier, 
    getProductSupplier, 
    createProductSupplier, 
    deleteProductSupplier, 
    updateProductSupplier
} = require('../controllers/productsupplier.controller');

const router = Router();

router.get('/productsupplier', getAllProductSupplier);

router.get('/productsupplier/:id', getProductSupplier);

router.post('/productsupplier', createProductSupplier);

router.delete('/productsupplier/:id', deleteProductSupplier);

router.put('/productsupplier/:id', updateProductSupplier);

module.exports = router;