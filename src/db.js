const { Sequelize } = require("sequelize");
// const db = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     ssl: process.env.ENVIRONMENT === 'production'
// })
const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
})
//const db = new Sequelize(process.env.DB_CONNECTION_STRING);
//Database connection string
{/* <db type>://<username>:<password>@ip:port/<db name>
postgres://postgres:dbLocal@localhost:5432/pie */}
module.exports = db;