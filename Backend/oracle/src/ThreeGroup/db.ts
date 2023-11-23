const Sequelize = require('sequelize');

const DB_NAME = 'xe';

const DB_USER = 'user_almacen';

const DB_PASS = '12345678';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'oracle',
        port: 1521
    }

);


async function generateDb() {
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();
