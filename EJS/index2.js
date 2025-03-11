const express = require("express")
const app = express();
const path = require("path")



let port = 3000;
app.use(express.static(path.join(__dirname, "/public/css")))
app.use(express.static(path.join(__dirname, "/public/js")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


app.get("/", (req, res) => {
    res.render("home.ejs");
})



app.get("/ig/:username", (req, res) => {

    const instaData = require("./data.json");
    let { username } = req.params;
    const data = instaData[username];
    console.log(data);
    if (data) {
        res.render("instagram2.ejs", { data })
    }
    else {
        res.render("notfound.ejs");
    }

})
app.get("*", (req, res) => {
    res.render("notfound.ejs");
})
app.get("/rolldice", (req, res) => {
    res.render("rolldice.ejs");
})

app.listen(port, () => {
    console.log("port is listening");
})