// Exploring app.use()


const express = require('express');
const app = express();

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
})


// Route handlers
app.get("/", (req, res) => {
    res.send("this is a root page");
});

app.get("/random", (req, res) => {
    res.send("this is random page");
});

// 404
app.use((req, res) => {
    res.send("Page not Found");
})

app.listen(8080, () => {
    console.log("port is listening at 8080");
});
