// function saveTodb(data, sucess, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         sucess();
//     } else {
//         failure();

//     }
// }

// saveTodb("apnacollege", () => {
//     console.log("you're data saved"),
//         saveTodb("hello world", () => {
//             console.log("you're data saved 2"),
//                 saveTodb("mycollege", () => {
//                     console.log("you're data saved 3");
//                 }, () => {
//                     console.error("weak connection 3")
//                 })
//         },
//             () => {
//                 console.error("weak connection 2")
//             })
// },
//     () => {
//         console.error("weak connection")
//     }
// );



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


// saveTodb("apnacollege");