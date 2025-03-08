let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");


btn.addEventListener("click", function () {
 
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});


ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {      //returns clicked target
    console.log("delete");
    let listItem = event.target.parentElement;
    listItem.remove();

  } else {
    console.log("not delete");
  }

  // console.log("button clicked!");
})

