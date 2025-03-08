let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

// callback nesting -> callback hell
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("lightgrey", 1000, () => {
            changeColor("blue", 1000)
        })
    });
})

