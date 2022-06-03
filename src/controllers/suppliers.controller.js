const pool = require ('../db');

const getAllSuppliers = async (req, res, next) => {
    try {
        const allSuppliers = await pool.query
            ('SELECT * FROM proveedores');
        res.json(allSuppliers.rows);
    } catch (error) {
        next(error);
    }
}

const getSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM proveedores WHERE id_proveedor = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Proveedor no encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createSupplier = async (req, res, next) => {
    const { id_proveedor, nombre, descripcion, telefono, direccion } = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO proveedores (id_proveedor, nombre, descripcion, telefono, direccion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [id_proveedor, nombre, descripcion, telefono, direccion]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM proveedores WHERE id_proveedor = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Proveedor no encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateSupplier = async (req, res, next) => {
    const { id } = req.params;
    const { id_proveedor, nombre, descripcion, telefono, direccion } = req.body;
    try {
        const result = await pool.query(
            'UPDATE proveedores SET id_proveedor = $1, nombre = $2, descripcion = $3, telefono = $4, direccion = $5 WHERE id_proveedor = $6 RETURNING *',
            [id_proveedor, nombre, descripcion, telefono, direccion, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Proveedor no encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllSuppliers,
    getSupplier,
    createSupplier,
    deleteSupplier,
    updateSupplier
}