


// function saveTodb(data) {

//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Sucess : data saved");
//         } else {
//             reject("failure : data not saved");
//         }
//     })
// }

// saveTodb("apna college")
//     .then((result) => {
//         console.log("result: ", result);
//         console.log("data saved.");
//         return saveTodb("Hello World")
//     })
//     .then((result) => {
//         console.log("result: ", result);
//         console.log("data2 saved");
//         return saveTodb("my name");
//     })
//     .then((result) => {
//         console.log("result: ", result);
//         console.log("data3 saved");
//     })

//     .catch((error) => {
//         console.log("rejected");
//         console.log(error)
//     })




// callback nesting -> callback hell
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("lightgrey", 1000, () => {
//             changeColor("blue", 1000)
//         })
//     });
// })


let h1 = document.querySelector("h1");

function changeColor(colors, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (h1) {
                console.log(colors);
                h1.style.color = colors;
                resolve("color changed");
            }
            else {
                reject("h1 element not found");
            }
        }, delay)
    })
}

changeColor("red", 1000).then(() => {
    changeColor("yellow", 1000).then(() => {
        changeColor("grey", 1000).then(() => {
            changeColor("lightgreen", 1000)
        })
    })
}).catch(console.error)