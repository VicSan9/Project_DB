const { Router } = require('express');
const {
    getAllSuppliers,
    getSupplier,
    createSupplier,
    deleteSupplier,
    updateSupplier
} = require('../controllers/suppliers.controller');

const router = Router();

router.get('/suppliers', getAllSuppliers);

router.get('/suppliers/:id', getSupplier);

router.post('/suppliers', createSupplier);

router.delete('/suppliers/:id', deleteSupplier);

router.put('/suppliers/:id', updateSupplier);

module.exports = router;