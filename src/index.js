const express = require('express');
const morgan = require('morgan');

const taskRoutes = require('./routes/tasks.routes')

const app = express();

app.use(morgan('dev'))

app.use(taskRoutes);

const port = 4000;

app.listen(port)
console.log('Server on port ' + port)