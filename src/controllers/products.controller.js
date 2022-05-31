const pool = require ('../db')

const getAllProducts = async (req, res) => {
    res.send('Retornando una lista de productos');
}

const getProduct = (req, res) => {
    res.send('Retornando un solo producto');
}

const createProduct = async (req, res) => {

    const {nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento} = req.body;
    
    try {
        const result = await pool.query('INSERT INTO productos (nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
        [nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento]);
                                     
        res.json(result.rows[0]);
    } catch (error){
        console.log(error.message)
        res.json({ error: error.message });
    }
}

const deleteProduct = (req, res) => {
    res.send('Eliminando un producto');
}

const updateProduct = (req, res) => {
    res.send('Actualizando un producto');
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}