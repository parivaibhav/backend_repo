const express = require("express")
const app = express();
const path = require("path")


let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs");
})
app.get("/hello", (req, res) => {
    res.send("hello");
})
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
})

app.get("/:username", (req, res) => {
    let { username } = req.params;
    const followers = ["jay", "vijay", "manoj", "mayank", "radha"];
    const following = ["jay", "vijay", "manoj", "mayank", "radha"];
    // console.log(username);
    res.render("instagram.ejs", { username,followers,following })

})

app.listen(port, () => {
    console.log("port is listening");
})