const { Router } = require('express');
const {
    getAllReports, 
    getReport, 
    createReport, 
    deleteReport, 
    updateReport
} = require('../controllers/reports.controller');

const router = Router();

router.get('/reports', getAllReports);

router.get('/reports/:id', getReport);

router.post('/reports', createReport);

router.delete('/reports/:id', deleteReport);

router.put('/reports/:id', updateReport);

module.exports = router;