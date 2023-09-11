
var btn = document.getElementById("btn");
var Name = document.getElementById("uname");
var age = document.getElementById("uAge");
var male = document.getElementById("male");
var fmale = document.getElementById("female");
var color = document.getElementById("color");



console.log(btn);
btn.addEventListener("click", excute);


function excute() {
  if (Name.value && age.value && color.value && (male.checked || fmale.checked)) {
    setCookies("name", Name.value, 5);
    setCookies("age", age.value, 5);
    setCookies("color", color.value, 5);
    setCookies("gender", male.checked, 5);
    setCookies("visited", 0, 5);
    window.location.assign("./login.html")

  } else {

    deleteCookie("visited");
  }

}

if (hasCookie('visited')) {
  window.location.assign('./login.html');
}

















