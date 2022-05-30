const { Router } = require('express');
const { 
    getAllTasks, 
    getTask, 
    createTask, 
    deleteTask, 
    updateTask 
} = require('../controllers/tasks.controller')

const router = Router();

router.get('/tasks', getAllTasks)

router.get('/tasks/10', getTask)

router.post('/tasks', createTask)

router.delete('/tasks', deleteTask)

router.put('/tasks', updateTask)

module.exports = router;