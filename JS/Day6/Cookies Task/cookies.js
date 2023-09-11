function setCookies(key, value, days) {
  var date = new Date();
  date.setMonth(date.getMonth() + days);
  console.log(date)
  document.cookie = `${key}=${value};expires=${date};`;
  console.log(document.cookie);
}


function deleteCookie(key) {
  setCookies(key, null, -20);
}

function getAllcookies() {
  var cookiesArr = document.cookie.split("; ");
  var objcookies = new Object();
  for (var i = 0; i < cookiesArr.length; i++) {
    var cookie = cookiesArr[i].split("=");
    objcookies[cookie[0]] = cookie[1];
  }
  return objcookies;
}
// console.log(getAllcookies());


function getCookie(key) {
  return getAllcookies()[key];
}

function hasCookie(key) {
  if (getAllcookies()[key]) {
    return true;
  } else {
    return false;
  }
}





