const express = require("express")
const app = express();


let port = 3000;

app.listen(port, () => {
    console.log(`server running at ${port}`);
})


app.get("/", (req, res) => {
    let h1 = `<h1>this is Home Page</h1>`;
    res.send(h1);
})

app.get("/search", (req, res) => {
    let { q } = req.query;
if(!q){
    res.send("nothing search")
}
    res.send(`search results ${q}`);
})