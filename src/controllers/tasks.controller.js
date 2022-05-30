const getAllTasks = async (req, res) => {
    res.send('Retornando una lista de tareas');
}

const getTask = (req, res) => {
    res.send('Retornando una sola tarea');
}

const createTask = (req, res) => {
    res.send('Creando una tarea');
}

const deleteTask = (req, res) => {
    res.send('Eliminando una tarea');
}

const updateTask = (req, res) => {
    res.send('Actualizando una tarea');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}