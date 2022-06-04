const pool = require ('../db');

const getAllTransaction = async (req, res, next) => {
    try {
        const allTransaction = await pool.query
            ('SELECT * FROM transacciones');
        res.json(allTransaction.rows);
    } catch (error) {
        next(error);
    }
}

const getTransaction = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM transacciones WHERE codigo = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Transaccion no encontrada",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createTransaction = async (req, res, next) => {
    const { fecha, id_miembro } = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO transacciones (fecha, id_miembro) VALUES ($1, $2) RETURNING *',
                [fecha, id_miembro]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteTransaction = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM transacciones WHERE codigo = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Transaccion no encontrada",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateTransaction = async (req, res, next) => {
    const { id } = req.params;
    const { fecha, id_miembro} = req.body;
    try {
        const result = await pool.query(
            'UPDATE transacciones SET fecha = $1, id_miembro = $2 WHERE codigo = $3 RETURNING *',
            [fecha, id_miembro, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Transaccion no encontrada",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTransaction,
    getTransaction,
    createTransaction,
    deleteTransaction,
    updateTransaction
}