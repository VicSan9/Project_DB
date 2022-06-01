const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '31680069',
    host: 'localhost',
    port: 5432,
    database: 'backpackdb',
});


module.exports = pool;