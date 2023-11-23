const Sequelize = require('sequelize');

const DB_NAME = 'postgres';

const DB_USER = 'postgres';

const DB_PASS = '12345678';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }

);


async function generateDb() {
    await database.sync({ force: true })
    console.log('Base de datos y tablas creada');
}

generateDb();
