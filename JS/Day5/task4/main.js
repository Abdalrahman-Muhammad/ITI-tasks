var myText = document.getElementById("myText");

function handleSucsses() {
  myText.innerHTML = "<h1> this success message</h1><p>this success Message</p>";
  myText.style.color = "green";
  myText.style.textAlign = "center";
  myText.setAttribute("class", "mydiv")
}
function handleAlert() {
  myText.innerHTML = "<h1> this failure message</h1><p>this failure Message</p>";
  myText.style.color = "red";
  myText.style.textAlign = "center";
  myText.setAttribute("class", "mydiv")

}

