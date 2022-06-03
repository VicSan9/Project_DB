const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const reportRoutes = require('./routes/report.routes');
//import de miembros
//import de administrador
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
//miembros
//administrador
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