const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
require('colors');

const conn = new Sequelize(process.env.POSTGRESQLDB);

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('¡Database MongoDB connection successfull! 👍'.bgGreen);

        await conn.sync();
        console.log('¡Database PostgreSQL connection successfull! 👍'.bgGreen);
    } catch (error) {
        console.clear();
        console.error('Error Database connection 🤔'.bgRed);
        throw new Error('Error Database connection 🤔'.bgRed);
    }
}

module.exports = dbConn;