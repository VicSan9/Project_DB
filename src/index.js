const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(productRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

const port = 4000;

app.listen(port);

console.log('Server on port ' + port);