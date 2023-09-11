function getData(cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(JSON.parse(xhr.responseText));
        // console.log(userData);
      }
    }
  }
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
}

function createRow(clientData) {
  var values = Object.values(clientData);
  var table = document.getElementById("clients").querySelector("tbody");
  var tableRow = document.createElement("tr");
  table.append(tableRow);
  values.forEach((element) => {
    var td = document.createElement("td");
    if (typeof element === "object") {
      var list = handleObject(element);
      td.append(list);
    } else {
      td.append(element);
    }
    tableRow.append(td);
  });
}

function populateTableData(clients) {
  clients.forEach((client) => {
    createRow(client);
  });
}

function handleObject(object) {
  var keys = Object.keys(object);
  var list = document.createElement("ul");
  keys.forEach((element) => {
    var item = document.createElement("li");
    var value = object[element];
    var text;
    if (typeof value == "object") text = handleObject(value);
    else text = element + ": " + value;
    item.append(text);
    list.append(item);
  });
  return list;
}
var btn = document.getElementById("butn");
btn.addEventListener("click", function () {
  getData(populateTableData);
});
// getData(populateTableData);