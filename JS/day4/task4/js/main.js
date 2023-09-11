function handleResult() {
  var result = document.getElementById("result");
  var tag = document.getElementById("tagName").value;
  var tagNumber = document.getElementsByTagName(tag).length;

  var classes = document.getElementById("className").value;
  var classesNum = document.getElementsByClassName(classes).length;

  var theId = document.getElementById("theId").value;
  var idLength = document.querySelectorAll("#" + theId).length;
  var hasId;


  if (idLength == 0) {
    hasId = false;
  } else {
    hasId = true;
  }


  var nameAttribute = document.getElementById("Name").value;
  var nameAttrLength = document.getElementsByName(nameAttribute).length;
  console.log(nameAttribute, nameAttrLength)









  result.innerHTML = "Number of tag " + tag + " is: " + tagNumber + " , number of class:  " + classes + " is: " + classesNum + " , has the id of " + theId + ": " + hasId + " , Name : " + nameAttrLength;


}