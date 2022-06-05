const { Router } = require('express');
const { 
    getAllAdministrators,
    getAdministrator,
    createAdministrator,
    deleteAdministrator,
    updateAdministrator,
    loginAdministrator
} = require('../controllers/administrators.controller');

const router = Router();

router.get('/administrators', getAllAdministrators);

router.get('/administrators/:id', getAdministrator);

router.post('/administrators', createAdministrator);

router.delete('/administrators/:id', deleteAdministrator);

router.put('/administrators/:id', updateAdministrator);

router.post('/administrators/login', loginAdministrator);

module.exports = router;