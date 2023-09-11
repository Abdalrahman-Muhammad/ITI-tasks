function handleStudents() {
  var studentNameInput = document.getElementById("student-name");
  var studentName = studentNameInput.value;
  var studentAgeInput = document.getElementById("student-age");
  var studentAge = studentAgeInput.value;
  var firstParagraph = document.getElementById("p1");
  var secondParagraph = document.getElementById("p2");

  if (studentName.length < 3 || Number(studentName)) {
    firstParagraph.style.display = "block";
    firstParagraph.innerHTML = "name must be string and more than three letters";
    return;
  }
  if (Number(studentAge) < 18) {
    secondParagraph.style.display = "block";
    secondParagraph.innerHTML = "you must be +18";
    return;
  }
  firstParagraph.style.display = "none";
  secondParagraph.style.display = "none";
  var tableBody = document.getElementById("bodyy");
  var lastRow = tableBody.lastElementChild;
  var newId = lastRow ? parseInt(lastRow.firstElementChild.textContent) + 1 : 1;

  // var studentRow = "<tr><td>" + 0 + "</td><td>" + studentName + "</td><td>" + studentAge + "</td><td><button>Remove</button></td></tr>";
  // table.insertAdjacentHTML('beforeend', studentRow);
  var row = document.createElement("tr");
  row.innerHTML = "<td>" + newId + "</d>" + "<td>" + studentName + "</td>" + "<td>" + studentAge + "</td>" + "<td> <button class='btn' onclick='handleRemove(this)'> Remove</button>  </td>"
  tableBody.append(row);



  console.log(studentName, studentAge);
}

function handleRemove(button) {
  button.parentNode.parentNode.remove();
}

