window.onload = function () {
  if (document.cookie.length != 0) {
    console.log("hello")
    console.log(document.cookie);
    var themeArray = document.cookie.split(";")[2].split("=")[1];
    console.log(themeArray);
    document.bgColor = themeArray;
  }
}












var exp = new Date();
exp.setDate(exp.getDate() + 2);
console.log(exp);
function setThemeCookies() {
  var theme = document.getElementById("BackColor").value;
  if (theme != 'select Theme') {
    document.bgColor = theme;
    document.cookie = "theme=" + theme + ";expires=" + exp + ";";
  }
}

var setCookies = document.getElementById("btn1");
setCookies.addEventListener("click", setNameAndEmailCookie);

var getcookiesbtn = document.getElementById("btn2");
getcookiesbtn.addEventListener("click", getAllCookies);


function getAllCookies() {
  if (document.cookie != 0) {
    alert(document.cookie);
  } else {
    alert("no cookies");
  }
}








function setNameAndEmailCookie() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("email").value;
  document.cookie = "Name=" + name + ";expires=" + exp + ";";
  document.cookie = "Email=" + mail + ";expires=" + exp + ";";
}