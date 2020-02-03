const form = document.querySelector("#parking-form");

let required;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  required = document.querySelectorAll(".invalid-color");
  for (let element of required) {
    element.remove();
  }
  const inputs = document.querySelectorAll(".inputClass");
  for (const inputLoop of inputs) {
    if (inputLoop.value === "") {
      const isRequired = document.createElement("div");
      isRequired.innerText = "*Required";
      inputLoop.parentElement.classList.add("input-invalid");
      inputLoop.parentElement.classList.remove("input-valid");
      inputLoop.parentElement.appendChild(isRequired);
      isRequired.classList.add("invalid-color");
    } else {
      // inputLoop.parentElement.classList.add("input-valid");
      // inputLoop.parentElement.classList.remove("input-invalid");
      carYearFunction()
    }
  }
});
// let carYear = document.querySelector("#car-year")

// car year must be a number
function carYearFunction() {
let carYear = document.querySelector("#car-year")
let yearCheck = Number(carYear.value)
console.log(yearCheck)
if (yearCheck == NaN) {
  let needCarYear = document.createElement("div")
  needCarYear.innerText = "Please enter a number"
  carYear.parentElement.appendChild(needCarYear)
  needCarYear.classList.add("invalid-color")
} else { 
  carYear.parentElement.classList.add("input-valid")
}}