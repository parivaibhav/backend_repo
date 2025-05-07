
const express = require('express');
const app = express();
const ExpressErrors = require("./ExpressErrors");

const checkToken = (req, res, next) => {
    let { token } = req.query;
    //http://localhost:8080/api?token=giveacess
    if (token === "giveacess") {
        next();
    }
    else {
        // http://localhost:8080/api?token=fem
        throw new ExpressErrors(401, "denied");   //Error Handling
    }
};


app.get("/api", checkToken, (req, res, next) => {
    res.send("data");
})
app.get("/", (req, res) => {
    res.send("home");
})

app.get("/admin", (req, res) => {
    throw new ExpressErrors(403, "Acess forbidden");
});

app.get("/err", (req, res) => {
    abcd = abcd;
})

app.use((err, req, res, next) => {
    let { status = 500, message } = err;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("port is listening at 8080");
});
