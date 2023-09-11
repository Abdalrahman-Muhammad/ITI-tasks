var userName = prompt("Please Enter your Name");
while (Number(userName)) {
  alert("ENTER VALID NAME");
  userName = prompt("Please Enter your Name");
}

var phoneNum = prompt("Please Enter your Phone Number");
while (phoneNum.length != 8 || !Number(phoneNum)) {
  alert("ENTER VALID Phone Number");
  phoneNum = prompt("Please Enter your Phone Number");
}

var mobileNum = prompt("Please Enter your Mobile Number");
while (mobileNum.length != 11 || !Number(mobileNum) || !/^(010|011|012)/.test(mobileNum)) {
  alert("ENTER VALID Mobile Number");
  mobileNum = prompt("Please Enter your Mobile Number");

}

var email = prompt("Please Enter your E-mail");
while (!((/^[^\s@]+@+[^\s@]+\.[^\s@]+$/).test(email))) {
  alert("ENTER VALID E-Mail");
  email = prompt("Please Enter your E-mail");

}
var color = prompt("choose color formatting [blue, red, green]");
while (
  color.toLowerCase() !== "green" &&
  color.toLowerCase() !== "red" &&
  color.toLowerCase() !== "blue"

) {
  color = prompt("Please enter a valid color  [blue, red, green]");
}
(color.toUpperCase() == "green".toUpperCase()) ? document.querySelector("div").style.color = "green"
  : (color.toUpperCase() == "red".toUpperCase()) ? document.querySelector("div").style.color = "red"
    : document.querySelector("div").style.color = "blue";


document.getElementById("user-name").innerHTML = "Welcome dear guest " + "<span>" + userName + "</span>";
document.getElementById("phone").innerHTML = "your telephone number is " + "<span>" + phoneNum + "</span>";
document.getElementById("mobile").innerHTML = "your mobile number is " + "<span>" + mobileNum + "</span>";
document.getElementById("mail").innerHTML = "your email address is " + "<span>" + email + "</span>";


var myDate = new Date().toDateString();
document.getElementById("date").innerHTML = "today is " + "<span>" + myDate + "</span>";


