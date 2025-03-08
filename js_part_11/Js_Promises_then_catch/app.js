
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

 saveTodb("apna college").then(() => {
    console.log("resolved");
})
.catch(()=>{
    console.log("rejected")
})

