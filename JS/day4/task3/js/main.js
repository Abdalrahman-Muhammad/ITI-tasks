function handleCreateElement() {
  var tagName = document.getElementById("tag").value;
  var theColor = document.getElementById("color").value;
  var inputText = document.getElementById("input-text").value;
  var container = document.getElementById("container");

  var elementRsult = document.createElement(tagName);
  container.append(elementRsult);
  elementRsult.innerHTML = inputText;
  elementRsult.style.backgroundColor = theColor;
}