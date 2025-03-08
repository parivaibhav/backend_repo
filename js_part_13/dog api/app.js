// let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
    // console.log("clicked");
    let link = await getImage();
    console.log(link)
    let img = document.querySelector("img")
    img.setAttribute("src", link);
    let p = document.querySelector("p")
    p.innerHTML = `<a href='${link}' download>${link}</a>`
})

async function getImage() {

    try {

        let res = await axios.get(url2);
        // console.log(res);
        return res.data.message;

    } catch (e) {
        // console.log(e);
        return e;
    }

}