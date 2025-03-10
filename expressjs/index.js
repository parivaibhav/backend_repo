const express = require("express")
const app = express();


let port = 3000;

app.listen(port, () => {
    console.log(`server running at ${port}`);
})

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     let code = `<h1>Fruites</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>`
//     res.send(code);
// })

app.get("/", (req, res) => {
    let h1 = `<h1>this is Home Page</h1>`;
    res.send(h1);
})
app.get("/contact", (req, res) => {
    let h1 = `<h1>this is Contact Page</h1>`;
    res.send(h1);
})
app.get("/about", (req, res) => {
    let h1 = `<h1>this is About Page</h1>`;
    res.send(h1);
})
app.get("*", (req, res) => {
    let h1 = `<h1>Not Found</h1>`;
    res.send(h1);
})

app.post("/", (req, res) => {
    console.log("received");
    res.send("post request");
})
// stop to server Ctrl + C