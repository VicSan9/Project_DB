const { Router } = require('express');
const { 
    getAllTransaction, 
    getTransaction, 
    createTransaction, 
    deleteTransaction, 
    updateTransaction
} = require('../controllers/transaction.controller');

const router = Router();

router.get('/transaction', getAllTransaction);

router.get('/transaction/:id', getTransaction);

router.post('/transaction', createTransaction);

router.delete('/transaction/:id', deleteTransaction);

router.put('/transaction/:id', updateTransaction);

module.exports = router;