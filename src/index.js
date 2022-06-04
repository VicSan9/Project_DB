const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const reportRoutes = require('./routes/report.routes');
const memberRoutes = require('./routes/members.routes');
const administratorRoutes = require('./routes/administrators.routes');
const sellerRoutes = require('./routes/sellers.routes');
const transactionRoutes = require('./routes/transaction.routes')
const suppliersRoutes = require('./routes/supplier.routes');
const transactionproductRoutes = require ('./routes/transactionproduct.routes')
const productsupplierRoutes = require('./routes/productsupplier.routes')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(productRoutes);
app.use(reportRoutes);
app.use(memberRoutes);
app.use(administratorRoutes);
app.use(sellerRoutes);
app.use(transactionRoutes);
app.use(suppliersRoutes);
app.use(transactionproductRoutes);
app.use(productsupplierRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

const port = 4000;

app.listen(port);

console.log('Server on port ' + port);