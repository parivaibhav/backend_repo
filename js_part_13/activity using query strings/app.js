let url = "http://universities.hipolabs.com/search?name=";
let country;

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    console.log("btn click");
    let country = document.querySelector("input").value;

    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);
})

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}


function show(colArr) {
    let list = document.querySelector("#list")
    for (college of colArr) {
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);

    }
}