// function changeColor() {
//   var lights = document.querySelectorAll("#circles > div");
//   for (let i = 0; i < lights.length; i++) {
//     lights[i].classList.remove("active");
//   }
//   var input = document.getElementById("in-put").value;
//   if (Number(input) > lights.length || !input) {
//     return;
//   }
//   lights[Number(input) - 1].classList.add("active");
// }

var x = 0;
setInterval(function () {
  var lights = document.querySelectorAll("#circles > div");
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove("active");
  }
  if (x > lights.length - 1) {
    x = 0;
  } else {
    lights[x].classList.add("active");
    x++;
  }
}, 500)



// function lightm(I){
// lights[I - 1].classList.add("active");
// }
// setTimeout(()=>{
//   lights[i].classList.remove("active");
// },2000)
