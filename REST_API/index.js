const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const path_join = path.join;
const { v4: uuidv4 } = require('uuid');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path_join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [{
    id: uuidv4(),
    username: "John Doe",
    content: "Hello World!"
}, {
    id: uuidv4(),
    username: "Jay Doe",
    content: "Hello World!"
}, {
    id: uuidv4(),
    username: "Vaibhav Pari",
    content: "Hello World!"
}];

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render("edit.ejs", { post });
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find(p => p.id === id);
    console.log(post);
    res.render("show.ejs", { post });
});

app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
    // console.log(req.body);
    res.send("Post request received");
});

app.patch("/posts/:id", (req, res) => {
    // let { id } = req.params;
    // let newContent = req.body.content;
    // console.log(newContent);
    // let post = posts.find(p => p.id === id);
    // post.content = newContent;
    // console.log(post);
    // res.redirect("/posts");

    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find(p => p.id === id);

    if (!post) {  // Check if the post exists
        return res.status(404).send("Post not found");  // Handle if post is not found
    }

    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});