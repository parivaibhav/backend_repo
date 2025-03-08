
// promises are rejected and resolved with some data(valid results or errors)


function saveTodb(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Sucess : data saved");
        } else {
            reject("failure : data not saved");
        }
    })
}

saveTodb("apna college")
    .then((result) => {
        console.log("result: ", result);
        console.log("data saved.");
        return saveTodb("Hello World")
    })
    .then((result) => {
        console.log("result: ", result);
        console.log("data2 saved");
        return saveTodb("my name");
    })
    .then((result) => {
        console.log("result: ", result);
        console.log("data3 saved");
    })

    .catch((error) => {
        console.log("rejected");
        console.log(error)
    })

