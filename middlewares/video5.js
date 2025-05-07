
const express = require('express');
const app = express();


app.use("/api", (req, res, next) => {
    let { token } = req.query;
    //http://localhost:8080/api?token=giveacess
    if (token === "giveacess") {
        next();
    }
    else {
        // http://localhost:8080/api?token=fem
        res.send("denied");
    }

})


app.get("/api", (req, res, next) => {
    res.send("data");
})
app.get("/", (req, res) => {
    res.send("home");
})

app.listen(8080, () => {
    console.log("port is listening at 8080");
});
