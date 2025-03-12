const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const path_join = path.join;


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path_join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});