var btn = document.getElementById("btn");
btn.addEventListener("click", showMassege);



var myWin;
function showMassege() {
  myWin = window.open("./index2.html", "", "width=500, height=300")
}

