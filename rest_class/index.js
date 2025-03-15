const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const path_join = path.join;


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path_join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [{
    username: "John Doe",
    content: "Hello World!"
}, {
    username: "Jay Doe",
    content: "Hello World!"
}, {
    username: "Vaibhav Pari",
    content: "Hello World!"
}];


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
    // console.log(req.body);
    res.send("Post request received");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});