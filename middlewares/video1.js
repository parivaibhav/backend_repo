// What is middleware

const express = require('express');
const app = express();

// middleware -> response send

app.get("/", (req, res) => {
    res.send();
})

app.listen(8080, () => {
    console.log("port is listening at 8080");
})