const { Router } = require('express');
const { 
    getAllSellers,
    getSeller,
    createSeller,
    deleteSeller,
    updateSeller
} = require('../controllers/sellers.controller');

const router = Router();

router.get('/sellers', getAllSellers);

router.get('/sellers/:id', getSeller);

router.post('/sellers', createSeller);

router.delete('/sellers/:id', deleteSeller);

router.put('/sellers/:id', updateSeller);

module.exports = router;