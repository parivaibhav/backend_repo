//using next()

const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
    let { query } = req.query;
    console.log(query);
    console.log("Hi I am middleware");

   return next();
    console.log("w")
});

// Second middleware
app.use((req, res, next) => {
    console.log("Hi I am 2nd middleware");
    next();
});

// Route handlers
app.get("/", (req, res) => {
    res.send("this is a root page");
});

app.get("/random", (req, res) => {
    res.send("this is random page");
});

app.listen(8080, () => {
    console.log("port is listening at 8080");
});
