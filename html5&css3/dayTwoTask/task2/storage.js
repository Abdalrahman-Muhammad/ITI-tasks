var gettenStorage = new Object();





function setStorage(key, value) {
  localStorage.setItem(key, value);
}

// setStorage("name", "ahmed");


function removeOneItem(key) {
  localStorage.removeItem(key);
}
// removeOneItem("name")

function removeAllStorage() {
  localStorage.clear()
}
// removeAllStorage();



function getStorage(key) {
  return localStorage.getItem(key);
  // gettenStorage[key] = x;
}
// alert(getStorage("name"))

function hasStorage(key1, key2) {
  if (getStorage(key1) !== null && getStorage(key2) !== null) {
    return true;
  } else {
    return false;
  }
}



