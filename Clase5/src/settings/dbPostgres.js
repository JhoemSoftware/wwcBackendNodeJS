const { Sequelize } = require('sequelize');

const connSql = new Sequelize(process.env.POSTGRESQLDB);

console.log(connSql);

module.exports = connSql