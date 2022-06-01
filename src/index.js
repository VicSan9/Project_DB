const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
//import de informes
//import de miembros
//import de administrador
//import de vendedor
//import de transferencia
//import de proveedor
//import de transferenciaProducto
//import de productoProveedor

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(productRoutes);
//informes
//miembros
//administrador
//vendedor
//transferencia
//proveedor
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