const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mydbms123', // your password
    database: 'test', // your database
    port: 3306,
});


let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}


console.log(getRandomUser());