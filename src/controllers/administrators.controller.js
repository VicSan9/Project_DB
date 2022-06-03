const pool = require ('../db');

const getAllAdministrators = async (req, res, next) => {
    try {
        const allAdministrators = await pool.query
            ('SELECT * FROM administrador');
        res.json(allAdministrators.rows);
    } catch (error) {
        next(error);
    }
}

const getAdministrator = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM administrador WHERE id_admin = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Administrador no encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createAdministrator = async (req, res, next) => {
    const {id_admin, id_miembro, contraseña} = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO administrador (id_admin, id_miembro, contraseña) VALUES ($1, $2, $3) RETURNING *',
                [id_admin, id_miembro, contraseña]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteAdministrator = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM administrador WHERE id_admin = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Administrador no encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateAdministrator = async (req, res, next) => {
    const { id } = req.params;
    const { id_admin, id_miembro, contraseña} = req.body;
    try {
        const result = await pool.query(
            'UPDATE administrador SET id_miembro = $1, contraseña = $2, id_admin = $3 WHERE id_admin = $4 RETURNING *',
            [id_admin, id_miembro, contraseña, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "administrador no encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllAdministrators,
    getAdministrator,
    createAdministrator,
    deleteAdministrator,
    updateAdministrator
}