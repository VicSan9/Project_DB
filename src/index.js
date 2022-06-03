const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const reportRoutes = require('./routes/report.routes');
const memberRoutes = require('./routes/members.routes');
const administratorRoutes = require('./routes/administrators.routes');
//import de vendedor
//import de transferencia
const suppliersRoutes = require('./routes/supplier.routes');
//import de transferenciaProducto
//import de productoProveedor

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(productRoutes);
app.use(reportRoutes);
app.use(memberRoutes);
app.use(administratorRoutes);
//vendedor
//transferencia
app.use(suppliersRoutes);
//transferenciaProducto
//productoProveedor

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

const port = 4000;

app.listen(port);

console.log('Server on port ' + port);