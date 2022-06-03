const pool = require ('../db');

const getAllReports = async (req, res, next) => {
    try {
        const allReports = await pool.query
            ('SELECT * FROM informes');
        res.json(allReports.rows);
    } catch (error) {
        next(error);
    }
}

const getReport = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM informes WHERE codigo = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Informe no encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createReport = async (req, res, next) => {
    const { total_costos, total_ventas, utilidad, num_unico, codigo_producto } = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO informes (total_costos, total_ventas, utilidad, num_unico, codigo_producto) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [total_costos, total_ventas, utilidad, num_unico, codigo_producto]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteReport = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM informes WHERE codigo = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Informe no encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateReport = async (req, res, next) => {
    const { id } = req.params;
    const { total_costos, total_ventas, utilidad, num_unico, codigo_producto } = req.body;
    try {
        const result = await pool.query(
            'UPDATE informes SET total_costos = $1, total_ventas = $2, utilidad = $3, num_unico = $4, codigo_producto = $5 WHERE codigo = $6 RETURNING *',
            [total_costos, total_ventas, utilidad, num_unico, codigo_producto, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Informe no encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllReports,
    getReport,
    createReport,
    deleteReport,
    updateReport
}