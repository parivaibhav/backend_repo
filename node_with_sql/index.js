const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mydbms123', // your password
    database: 'delta_app', // your database
});

let q="drop table if exists users";
connection.query(q, (err, result) => {  // create table
    if (err) throw err;
    console.log("Table droped");
});

// let insert ="insert into user (id, username, email, password) values ('2', 'admin', 'vaibhav123@gamail.com', 'admin')";
// connection.query(insert, (err, result) => {  // insert data
//     if (err) throw err;
//     console.log("Data inserted");
// });

try {
    connection.query("SELECT * from delta_app.user", (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
    })
} catch (e) {
    console.log(e);
}
connection.end();
// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.username(), // before version 9.1.0, use userName()
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }


