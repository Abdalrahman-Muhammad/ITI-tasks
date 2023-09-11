var img = document.getElementById("img");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");











if (getCookie("gender") == "true") {
  img.setAttribute("src", "./images/1.jpg");
} else {
  img.setAttribute("src", "./images/2.jpg");
}


var txt = getCookie("name");
var clr = getCookie("color")
console.log(txt);
span1.append(txt);
span1.style.color = clr;

var count = Number(getCookie("visited"));
var addcount = ++count;
setCookies("visited", addcount, 5);

span2.append(addcount);
span2.style.color = clr;











