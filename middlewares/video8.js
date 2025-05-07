
const express = require('express');
const app = express();


app.get("/err", (req, res) => {
    akmsa = amksa;
});

app.use("/err", (err, req, res, next) => {
    console.log("-------------");
    next(err);
});

app.use("/err", (err, req, res, next) => {
    console.log("------2-------");
    next(err);
});




app.get("/api", (req, res, next) => {
    res.send("data");
})
app.get("/", (req, res) => {
    res.send("home");
})

app.listen(8080, () => {
    console.log("port is listening at 8080");
});
