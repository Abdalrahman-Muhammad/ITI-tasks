var myForm = document.forms[0];

var userName = myForm.getElementsByTagName("input")[0].value;
var userMail = myForm.getElementsByTagName("input")[1].value;

window.onload = function () {
  var userName = myForm.getElementsByTagName("input")[0].value;
  var userMail = myForm.getElementsByTagName("input")[1].value;
  console.log(userName, userMail);
  if (hasStorage("userName", "userMail")) {
    userName = getStorage("userName");
    userMail = getStorage("userMail");
  }
  console.log(userName, userMail);

}
// console.log(userName, userMail)



function handleStorage() {
  var checkBox = document.querySelector("[type='checkbox']");
  if (checkBox.checked) {

    var userName = myForm.getElementsByTagName("input")[0].value;
    var userMail = myForm.getElementsByTagName("input")[1].value;

    setStorage("userName", userName);
    setStorage("userMail", userMail);


  } else {
    removeAllStorage();
  }

}



