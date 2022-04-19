const { Sequelize } = require('sequelize')
const ENV = process.env

module.exports = new Sequelize(
    ENV.DB_NAME,
    ENV.DB_USER,
    ENV.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: ENV.DB_HOST,
        port: ENV.DB_PORT
    }
)