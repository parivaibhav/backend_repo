function hello() {
    console.log("inside hello function");
}

function demo() {
    console.log("inside demo function");
    console.log("calling hello function");
    hello();
    // demo();
}


console.log("calling demo function");
demo();
console.log("outside");