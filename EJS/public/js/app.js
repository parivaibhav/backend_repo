

let btns = document.querySelectorAll(".follow");

for (btn of btns) {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
        // alert("button was clicked");
        btn.innerHTML = "following";

    })
}