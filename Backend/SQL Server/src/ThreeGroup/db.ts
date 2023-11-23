const Sequelize = require('sequelize');

const DB_NAME = 'Sql_Server';

const DB_USER = 'sa';

const DB_PASS = '12345678';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mssql',
        port: 1433
    }

);


async function generateDb() {
    await database.sync({ force: true })
    console.log('Base de datos y tablas creada');
}

generateDb();
