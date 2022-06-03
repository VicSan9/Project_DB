const pool = require ('../db');

const getAllMembers = async (req, res, next) => {
    try {
        const allMembers = await pool.query
            ('SELECT * FROM miembros');
        res.json(allMembers.rows);
    } catch (error) {
        next(error);
    }
}

const getMember = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('SELECT * FROM miembros WHERE id_miembro = $1', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Miembro no encontrado",
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createMember = async (req, res, next) => {
    const { cc, nombre, telefono, direccion} = req.body;
    try {
        const result = await pool.query
            ('INSERT INTO miembros (cc, nombre, telefono, direccion) VALUES ($1, $2, $3, $4) RETURNING *',
                [cc, nombre, telefono, direccion]);                                 
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const deleteMember = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query
            ('DELETE FROM miembros WHERE id_miembro = $1 RETURNING *', [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Miembro no encontrado",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateMember = async (req, res, next) => {
    const { id } = req.params;
    const { cc, nombre, telefono, direccion } = req.body;
    try {
        const result = await pool.query(
            'UPDATE miembros SET cc = $1, nombre = $2, telefono = $3, direccion = $4 WHERE id_miembro = $5 RETURNING *',
            [cc, nombre, telefono, direccion, id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Miembro no encontrado",
            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllMembers,
    getMember,
    createMember,
    deleteMember,
    updateMember
}