const { Sequelize } = require('sequelize');
require('colors');

const sequelize = new Sequelize(process.env.POSTGRESQLDB);

const dbConnPostgres = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync();
        console.log('¡Database PostgreSQL connection successfull! 👍'.green);
    } catch (error) {
        console.clear();
        throw new Error('Error Database PostgreSQL connection 🤔'.bgRed);
    }
}

module.exports = {
    sequelize,
    dbConnPostgres
};