const { Router } = require('express');
const { 
    getAllTransactionProduct, 
    getTransactionProduct, 
    createTransactionProduct, 
    deleteTransactionProduct, 
    updateTransactionProduct
} = require('../controllers/transactionproduct.controller');

const router = Router();

router.get('/transactionproduct', getAllTransactionProduct);

router.get('/transactionproduct/:id', getTransactionProduct);

router.post('/transactionproduct', createTransactionProduct);

router.delete('/transactionproduct/:id', deleteTransactionProduct);

router.put('/transactionproduct/:id', updateTransactionProduct);

module.exports = router;