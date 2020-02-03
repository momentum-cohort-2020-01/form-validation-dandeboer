const form = document.querySelector("#parking-form");

let required;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  required = document.querySelectorAll(".invalid-color");
  for (let element of required) {
    console.log(required);
    element.remove();
  }
  const inputs = document.querySelectorAll(".inputClass");
  for (const inputLoop of inputs) {
    if (inputLoop.value === "") {
      const isRequired = document.createElement("div");
      isRequired.innerText = "*Required";
      inputLoop.parentElement.classList.add("input-invalid");
      inputLoop.parentElement.classList.remove("input-valid");
      console.log(isRequired);
      inputLoop.parentElement.appendChild(isRequired);
      isRequired.classList.add("invalid-color");
    } else {
      inputLoop.parentElement.classList.add("input-valid");
      inputLoop.parentElement.classList.remove("input-invalid");
    }
  }
});