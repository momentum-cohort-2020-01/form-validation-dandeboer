console.log("Add validation!");
//let appendTest= document.getElementById("")

let nameField = document.getElementById("name-field");

let form = document.querySelector("#parking-form");

let isRequired = document.createElement("Div");
//let text = document.createTextNode("Is Required");
//isRequired.innerText=("Required");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let inputs = document.querySelectorAll(".inputClass");
  for (let inputLoop of inputs) {
    //if (inputLoop.parentElement.classList.contains(input-invalid) = false) {}
    if (inputLoop.value === "") {
        let isRequired = document.createElement("Div");
        isRequired.innerText=("Required");
      inputLoop.parentElement.classList.add("input-invalid");
      inputLoop.parentElement.classList.remove("input-valid");
      console.log(isRequired)
      inputLoop.parentElement.appendChild(isRequired);
      //let isRequiredClone = isRequired.cloneNode()
    } else {
      inputLoop.parentElement.classList.add("input-valid");
      inputLoop.parentElement.classList.remove("input-invalid");
    }
}});

//add a class to every imput to identify it and put those in an array and a loop
//if input.value === ""
//.contains