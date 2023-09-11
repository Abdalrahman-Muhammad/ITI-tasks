// function handleInput(e) {
//   var p = document.querySelector("#container .together .errorMessage");
//   var textInput = document.querySelector("input");

//   if (textInput.value == "") {
//     p.innerHTML = "this value is required"
//   } else {
//     p.style.display = "none"
//   }
//   console.log(textInput)
//   // if ((e.target.value == false)) {
//   //   p.innerHTML = "this value is required"
//   // }
// }
// function handleSubmit(e) {
//   e.preventDefault();
// }



// var myForm = document.getElementById("myForm");

// // myForm.addEventListener("submit", handleInput);
// myForm.addEventListener("submit", handleSubmit);

// function validateForm() {
//   var textInput = document.getElementById("inputText");
//   var p1 = document.querySelector(".errorMessage");
//   if (textInput.value == "") {
//     p1.innerHTML = "name must be filled";
//     return;
//   } else {

//   }
// }
// myForm.addEventListener("submit", validateForm);



var allInputs = document.querySelectorAll(".inputs input");
var btn = document.getElementById("btn");


function handleInput() {
  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value == "") {
      allInputs[i].nextElementSibling.innerHTML = "this field is required"
    } else {
      allInputs[i].nextElementSibling.innerHTML = ""
    }
  }
}


btn.addEventListener("click", function (e) {
  e.preventDefault();
})
btn.addEventListener("click", handleInput);
console.log(allInputs)


var male = document.getElementsByName("gender")[0];
var fmale = document.getElementsByName("gender")[1];

male.addEventListener('click', function () {

})

console.log(male.checked);
if (male.checked || fmale.checked) {
}

console.log(male, fmale)

var radiopara = document.getElementById("forRaios");































