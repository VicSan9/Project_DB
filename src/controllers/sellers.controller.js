const pool = require ('../db');

const getAllSellers = async (req, res, next) => {
    try {
        const allSellers = await pool.query
            ('SELECT * FROM vendedores');
        res.json(allSellers.rows);
    } catch (error) {
        next(error);
    }
}

const getSeller = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM vendedores WHERE id_vendedor = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Vendedor no encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createSeller = async (req, res, next) => {
    const {id_miembro} = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO vendedores (id_miembro) VALUES ($1) RETURNING *',
                [id_miembro]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteSeller = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM vendedores WHERE id_vendedor = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Vendedor no encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateSeller = async (req, res, next) => {
    const { id } = req.params;
    const {id_miembro} = req.body;
    try {
        const result = await pool.query(
            'UPDATE vendedores SET id_miembro = $1 WHERE id_vendedor = $2 RETURNING *',
            [id_miembro, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Vendedor no encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllSellers,
    getSeller,
    createSeller,
    deleteSeller,
    updateSeller
}