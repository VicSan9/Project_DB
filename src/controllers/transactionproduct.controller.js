const pool = require ('../db');

const getAllTransactionProduct = async (req, res, next) => {
    try {
        const allTransactionProduct = await pool.query
            ('SELECT * FROM transaccionproducto');
        res.json(allTransactionProduct.rows);
    } catch (error) {
        next(error);
    }
}

const getTransactionProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM transaccionproducto WHERE id_tp = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La transaccion del producto no ha sido encontrada",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createTransactionProduct = async (req, res, next) => {
    const { num_unico, codigo, cantidad_comprada } = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO transactionproducto (num_unico, codigo, cantidad_comprada) VALUES ($1, $2, $3) RETURNING *',
                [num_unico, codigo, cantidad_comprada]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteTransactionProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM transaccionproducto WHERE id_tp = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La transaccion del producto no ha sido encontrada",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateTransactionProduct = async (req, res, next) => {
    const { id } = req.params;
    const { num_unico, codigo, cantidad_comprada} = req.body;
    try {
        const result = await pool.query(
            'UPDATE transaccionproducto SET num_unico = $1, codigo = $2, cantidad_comprada = $3 WHERE id_tp = $4 RETURNING *',
            [num_unico, codigo, cantidad_comprada, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La transaccion del producto no ha sido encontrada",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTransactionProduct,
    getTransactionProduct,
    createTransactionProduct,
    deleteTransactionProduct,
    updateTransactionProduct
}