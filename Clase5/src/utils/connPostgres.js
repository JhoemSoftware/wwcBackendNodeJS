const { Sequelize } = require('sequelize');
require('colors');

const conn = new Sequelize(process.env.POSTGRESQLDB);

const dbConnPostgres = async () => {
    try {
        await conn.authenticate();
        await conn.sync();
        console.log('¡Database PostgreSQL connection successfull! 👍'.bgGreen);
    } catch (error) {
        console.clear();
        throw new Error('Error Database PostgreSQL connection 🤔'.bgRed);
    }
}

module.exports = dbConnPostgres;