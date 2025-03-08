let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
    // console.log("clicked");
    let fact = await getFacts();
    console.log(fact)
    let p = document.querySelector("p");
    p.innerText = fact;
})

async function getFacts() {

    try {

        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;

    } catch (e) {
        // console.log(e);
        return e;
    }

}