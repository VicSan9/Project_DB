const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
//import de informes
//import de miembros
//import de administrador
//import de vendedor
//import de transaccion
const transactionRoutes = require('./routes/transaction.routes')
//import de proveedor
//import de transaccionProducto
const transactionproductRoutes = require('./routes/transactionproduct.routes')
//import de productoProveedor
const productsupplierRoutes = require('./routes/productsupplier.routes')


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(productRoutes);
//informes
//miembros
//administrador
//vendedor
//transaccion
app.use(transactionRoutes);
//proveedor
//transaccionProducto
app.use(transactionproductRoutes);
//productoProveedor
app.use(productsupplierRoutes);


app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

const port = 4000;

app.listen(port);

console.log('Server on port ' + port);