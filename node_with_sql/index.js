const { faker } = require('@faker-js/faker'); // Require the faker-js module
const mysql = require('mysql2'); // Require the mysql2 module
const express = require('express'); // Require the Express module
const app = express();  // Create an Express app
const path = require('path'); // Require the path module
const methodOverride = require('method-override'); // Require the method-override module

app.use('method-override', methodOverride('_method')); // Use the method-override middleware
app.use(express.urlencoded({ extended: true })); // Use the urlencoded middleware
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set("views", (path.join(__dirname, '/views'))); // Set the views directory

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mydbms123',
  database: 'delta_app',
});


// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Function to generate a random user
const getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// Insert random users
const generateUsers = (count = 10) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = getRandomUser();
    users.push([user.id, user.username, user.email, user.password]);
  }

  const query = "INSERT INTO user (id, username, email, password) VALUES ?";
  connection.query(query, [users], (err, result) => {
    if (err) {
      console.error('Error inserting users:', err);
      return;
    }
    console.log(`Inserted ${result.affectedRows} users`);
  });
};

// generateUsers(); // Uncomment to generate users

//Home route
app.get("/", (req, res) => {
  const query = "SELECT count(*) FROM user";

  try {
    connection.query(query, (err, results) => {
      if (err) {
        throw err; // Throw error to be caught by the catch block
      }
      let count = results[0]['count(*)'];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send("Database error occurred");
  }
});



app.get("/users", (req, res) => { // Route to get all users

  const query = "SELECT * FROM user";
  try {
    connection.query(query, (err, results) => {
      if (err) throw err; // Throw error to be caught by the catch block
      res.render("users.ejs", { users: results });

      // res.send(results);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send("Database error occurred");
  }
});

//Edit user route
app.get("/users/:id/edit", (req, res) => {  // Route to get a user by id
  const { id } = req.params;
  const query = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(query, [id], (err, results) => {
      if (err) throw err; // Throw error to be caught by the catch block
      res.render("edit.ejs", { user: results[0] });

    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send("Database error occurred");
  }
});

// Update user route
app.patch("/users/:id", (req, res) => {  // Route to get a user by id
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  res.send("Update user route");
});

// delete user route
app.get("/users/:id/delete", (req, res) => {  // Route to get a user by id
  const { id } = req.params;
  const query = `DELETE FROM user WHERE id = '${id}'`;

  try {
    connection.query(query, [id], (err, results) => {
      if (err) throw err; // Throw error to be caught by the catch block
      res.redirect("/users");

    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send("Database error occurred");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
