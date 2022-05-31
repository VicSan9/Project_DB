const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./routes/product.routes')

const app = express();

app.use(morgan('dev'))
app.use(express.json())

app.use(productRoutes);

const port = 4000;

app.listen(port)
console.log('Server on port ' + port)