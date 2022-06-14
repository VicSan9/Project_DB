const pool = require ('../db');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await pool.query
            ('SELECT * FROM inventory');
        res.json(allProducts.rows);
    } catch (error) {
        next(error);
    }
}

const getDates = async (req, res, next) => {
    try {
        const dates = await pool.query
            ('SELECT * FROM product_to_expire');
        res.json(dates.rows);
    } catch (error) {
        next(error);
    }
}

const getAllProducts2 = async (req, res, next) => {
    try {
        const allProducts = await pool.query
            ('SELECT * FROM productos');
        res.json(allProducts.rows);
    } catch (error) {
        next(error);
    }
}

const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM productos WHERE codigo = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Producto no encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createProduct = async (req, res, next) => {
    const { nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento } = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO productos (nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM productos WHERE codigo = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Producto no encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento } = req.body;
    try {
        const result = await pool.query(
            'UPDATE productos SET nombre = $1, p_venta_u = $2, p_compra_u = $3, lote = $4, descripcion = $5, stack = $6, fecha_vencimiento = $7 WHERE codigo = $8 RETURNING *',
            [nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Producto no encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllProducts,
    getAllProducts2,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    getDates
}