const pool = require ('../db');

const getAllProductSupplier = async (req, res, next) => {
    try {
        const allProductSupplier = await pool.query
            ('SELECT * FROM productoProveedor');
        res.json(allProductSupplier.rows);
    } catch (error) {
        next(error);
    }
}

const getProductSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM productoProveedor WHERE id_pr = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "El proveedor del producto no ha sido encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createProductSupplier = async (req, res, next) => {
    const { id_proveedor, codigo} = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO productoProveedor (id_proveedor, codigo) VALUES ($1, $2) RETURNING *',
                [id_proveedor, codigo]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteProductSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM productoProveedor WHERE id_pr = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "El proveedor del producto no ha sido encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateProductSupplier = async (req, res, next) => {
    const { id } = req.params;
    const { id_proveedor, codigo } = req.body;
    try {
        const result = await pool.query(
            'UPDATE productoProveedor SET id_proveedor = $1, codigo = $2 WHERE id_pr = $3 RETURNING *',
            [id_proveedor, codigo , id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "El proveedor del producto no ha sido encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllProductSupplier,
    getProductSupplier,
    createProductSupplier,
    deleteProductSupplier,
    updateProductSupplier
}