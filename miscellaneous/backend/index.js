const express = require("express");
const app = express();
let port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`standard get respond welcome ${user}`);
})
app.post("/register", (req, res) => {
    let { user, pass } = req.body;
    res.send(`standard post respond ${user}`);
})


app.listen(port, () => {
    console.log("port is running");
})